import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const { countDown, redLight, yellowLight, greenLight, percentage } =
    useTrafficLight(5);

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold">Semáforo con useHook</h1>
        <h2 className="text-xl font-thin">{countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className={`w-32 h-32 ${redLight} rounded-full`}></div>

        <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>

        <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>
      </div>
    </div>
  );
};
