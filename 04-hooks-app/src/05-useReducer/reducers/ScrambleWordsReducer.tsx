interface ScrambleWordsState {
  words: string[];
  OriginalWordsLength: number;
  currentWord: string;
  scrambledWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
}

interface ScrambleWordsAction {
  type: "GUESS_WORD" | "SKIP_WORD" | "PLAY_AGAIN" | "SET_GUESS";
  payload?: {
    guess?: string;
  };
}

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordsState => {
  const words = shuffleArray(GAME_WORDS);

  return {
    words,
    currentWord: words[0],
    OriginalWordsLength: words.length,
    scrambledWord: scrambleWord(words[0]),
    guess: "",
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
  };
};

const getNewWords = (state: ScrambleWordsState) => {
  const newWords = state.words.slice(1);

  return {
    words: newWords,
    currentWord: newWords[0],
    scrambledWord: scrambleWord(newWords[0]),
  };
};

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction,
): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUESS": {
      return { ...state, guess: action.payload?.guess || "" };
    }
    case "GUESS_WORD": {
      //* ON ERROR GUESS
      if (state.guess.toLowerCase() !== state.currentWord.toLowerCase()) {
        const errorCounter = state.errorCounter + 1;

        if (errorCounter >= state.maxAllowErrors) {
          return { ...state, errorCounter, isGameOver: true, guess: "" };
        }

        return { ...state, errorCounter, guess: "" };
      }

      return {
        ...state,
        points: state.points + 1,
        ...getNewWords(state),
        guess: "",
      };
    }
    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state;

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        ...getNewWords(state),
        guess: "",
      };
    }
    case "PLAY_AGAIN":
      return getInitialState();
    default:
      throw new Error("Action not supported");
  }
};
