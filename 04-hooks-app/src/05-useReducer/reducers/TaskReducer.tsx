import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "CLEAR_ALL" };

const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const taskStateSchema = z.object({
  todos: z.array(todoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

const calculateMetadata = (
  todos: Todo[],
): { length: number; completed: number; pending: number } => {
  return {
    length: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    pending: todos.filter((todo) => !todo.completed).length,
  };
};

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState)
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };

  const result = taskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.error(result.error);

    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      const newTodos = [...state.todos, newTodo];
      const { length, completed, pending } = calculateMetadata(newTodos);

      return {
        todos: newTodos,
        length,
        completed,
        pending,
      };
    }

    case "TOGGLE_TODO": {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
      const { length, completed, pending } = calculateMetadata(newTodos);

      return {
        todos: newTodos,
        length,
        completed,
        pending,
      };
    }

    case "DELETE_TODO": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.id);
      const { length, completed, pending } = calculateMetadata(newTodos);

      return {
        todos: newTodos,
        length,
        completed,
        pending,
      };
    }

    case "CLEAR_ALL": {
      return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0,
      };
    }

    default:
      return state;
  }
};
