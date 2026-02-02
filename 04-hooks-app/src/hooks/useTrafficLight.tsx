import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (interval: number) => {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const [countDown, setCountDown] = useState(interval);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prev) => {
        if (prev > 1) return prev - 1;

        setLight((currentLight) => {
          if (currentLight === "red") return "green";
          if (currentLight === "green") return "yellow";
          return "red";
        });

        return interval;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  const redLight = light === "red" ? colors.red : colors.gray;
  const yellowLight = light === "yellow" ? colors.yellow : colors.gray;
  const greenLight = light === "green" ? colors.green : colors.gray;

  const percentage = (countDown / interval) * 100;

  return { light, countDown, redLight, yellowLight, greenLight, percentage };
};
