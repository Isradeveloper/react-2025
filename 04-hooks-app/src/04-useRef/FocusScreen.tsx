import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-white">Focus Screen</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="bg-white text-black px-4 py-2 rounded-md focus:outline-2 focus:outline-blue-500"
        ref={inputRef}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Set Focus
      </button>
    </div>
  );
};
