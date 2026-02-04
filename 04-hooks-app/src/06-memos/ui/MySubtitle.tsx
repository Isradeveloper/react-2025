import { memo } from "react";

interface Props {
  subtitle: string;

  callMyApi: () => void;
}

export const MySubtitle = memo(({ subtitle, callMyApi }: Props) => {
  console.log("MySubtitle renderizado");

  return (
    <>
      <h3 className="text-md font-thin text-white">{subtitle}</h3>

      <button
        className="bg-lime-300 text-black p-2 rounded-md font-bold"
        onClick={callMyApi}
      >
        Llamar a funcion
      </button>
    </>
  );
});
