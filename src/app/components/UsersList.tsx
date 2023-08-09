import { FC } from "react";

interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface IParams {
  email?: string;
  name?: string;
}

interface IProps {
  params?: IParams;
}

export const UsersList: FC<IProps> = async ({ params }) => {
  const res = params
    ? await fetch(
        "http://127.0.0.1:3001/users?" +
          new URLSearchParams(params as Record<string, string>).toString()
      )
    : await fetch("http://127.0.0.1:3001/users");

  const users: IUser[] = await res.json();

  return (
    <table className="w-full text-sm text-left text-gray-800 shadow-md">
      <thead className="text-xs text-gray-200 uppercase bg-primary">
        <tr>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Created at{" "}
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {users.map((user) => (
          <tr key={user.id}>
            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              {user.email}
            </td>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
