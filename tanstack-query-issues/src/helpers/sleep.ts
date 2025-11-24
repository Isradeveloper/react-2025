export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

