import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  getUser: Usable<User>;
}
export const ClientInformation = ({ getUser }: Props) => {
  const { name, location, role, id } = use(getUser);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {name} - #{id}
      </h2>

      <p>{location}</p>
      <p>{role}</p>
    </div>
  );
};
