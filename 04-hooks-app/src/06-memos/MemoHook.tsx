import { Button } from "@/components/ui/button";
import { MyTitle } from "./ui/MyTitle";
import { useCallback, useState } from "react";
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  const handleCallMyApi = useCallback(() => {
    console.log("Llamando a la API");
  }, []);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubtitle
        subtitle={subtitle}
        callMyApi={handleCallMyApi}
      />

      <div className="w-50 flex flex-col gap-4">
        <Button
          variant={"destructive"}
          className="w-full"
          onClick={() => setTitle("Hello, " + new Date().getTime())}
        >
          Cambiar titulo
        </Button>
        <Button
          variant={"secondary"}
          className="w-full"
          onClick={() => setSubtitle("World")}
        >
          Cambiar subtitulo
        </Button>
      </div>
    </div>
  );
};
