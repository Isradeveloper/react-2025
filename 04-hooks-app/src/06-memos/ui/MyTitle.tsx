import React from "react";

interface Props {
  title: string;
}

export const MyTitle = React.memo(({ title }: Props) => {
  console.log("MyTitle renderizado");

  return <h2 className="text-xl font-thin text-white">{title}</h2>;
});
