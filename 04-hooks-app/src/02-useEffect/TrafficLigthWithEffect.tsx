import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightEffect = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 1) return prev - 1;

        setLight((currentLight) => {
          if (currentLight === "red") return "green";
          if (currentLight === "green") return "yellow";
          return "red";
        });

        return 5;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold">Semáforo con useEffect</h1>
        <h2 className="text-xl font-thin">{seconds}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(seconds / 5) * 100}%` }}
          ></div>
        </div>

        <div
          className={`w-32 h-32 ${
            light === "red" ? colors[light] : colors.gray
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "yellow" ? colors[light] : colors.gray
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "green" ? colors[light] : colors.gray
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
