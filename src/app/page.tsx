import { Suspense } from "react";
import { UsersList } from "./components/UsersList";
import { SearchUser } from "./components/forms/SearchUser";

export default async function Home({
  searchParams
}: {
  searchParams: {
    email?: string;
    name?: string;
  };
}) {
  return (
    <div>
      <Suspense fallback={<p>Carregando</p>}>
        <div className="flex flex-col space-y-8">
          <SearchUser />
          <UsersList params={searchParams} />
        </div>
      </Suspense>
    </div>
  );
}
