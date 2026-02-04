import { UserContext } from "@/09-useContext/context/userContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const ProfilePage = () => {
  const { logout, user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Sesión cerrada correctamente");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Profile Page</h1>

      <pre className="text-white bg-red-900 p-4 rounded-md my-3 w-3/4 overflow-x-auto text-center">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button
        variant={"destructive"}
        className="w-3/4 mt-5
      "
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
