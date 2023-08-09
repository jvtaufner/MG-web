interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export const UsersList = async () => {
  const res = await fetch("http://127.0.0.1:3001/users");
  const users: IUser[] = await res.json();

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {users.map((user) => (
          <tr key={user.id}>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
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
