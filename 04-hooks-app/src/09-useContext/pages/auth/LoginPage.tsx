import { UserContext } from "@/09-useContext/context/userContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  const [userId, setUserId] = useState<number | null>(null);

  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userId === null) return;

    const success = login(userId);

    if (!success) {
      toast.error("Usuario no encontrado");
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Login Page</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 my-10"
      >
        <Input
          type="number"
          placeholder="ID del usuario"
          className="bg-white text-black"
          value={userId ?? ""}
          onChange={(e) => setUserId(Number(e.target.value))}
        />

        <Button type="submit">Login</Button>

        <Link to="/about">
          <Button
            variant="link"
            className="p-2 text-white bg-red-600 w-full"
          >
            <span>Ir a la página de about</span>
          </Button>
        </Link>
      </form>
    </div>
  );
};
