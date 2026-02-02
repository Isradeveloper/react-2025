import { useState } from "react";


const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const onChangeColor = (color: TrafficLightColor) => {
    setLight((prev) => {
      console.log(prev);
      return color;
    });
  };

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">
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

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onChangeColor("red")}
            disabled={light === "red"}
          >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onChangeColor("yellow")}
            disabled={light === "yellow"}
          >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onChangeColor("green")}
            disabled={light === "green"}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
