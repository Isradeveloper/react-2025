export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id,
    name: "Fernando",
    location: "Ottawa, Canada",
    role: "Admin",
  }
};
