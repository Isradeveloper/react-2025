import { UserContext } from "@/09-useContext/context/userContext";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { Link } from "react-router";

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center space-y-3">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>

      <div className="flex flex-col gap-2">
        {isAuthenticated ?? <Link to="/profile">Profile</Link>}

        {isAuthenticated ? (
          <Button variant={"ghost"} size="lg" onClick={() => logout()}>Logout</Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
