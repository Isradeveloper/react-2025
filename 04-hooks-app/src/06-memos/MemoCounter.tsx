import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_stuff");

  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos");
  }

  console.timeEnd("Heavy_stuff");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(40_000);


  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">
          MemoCounter - {myHeavyValue}
        </h1>

        <h4 className="text-md font-thin text-white">Counter: {counter}</h4>

        <h4 className="text-md font-thin text-white">Counter2: {counter2}</h4>

        <button
          className="bg-lime-300 text-black p-2 rounded-md font-bold"
          onClick={increment}
        >
          Incrementar
        </button>

        <button
          className="bg-lime-300 text-black p-2 rounded-md font-bold"
          onClick={increment2}
        >
          Incrementar Counter2
        </button>
      </div>
    </>
  );
};
