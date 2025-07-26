import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import MovieList from "./movie-list";

export default async function () {
  const session = await auth();
  return (
    <>
      <AuthorizationCheck />
      <MovieList userId={session?.user?.id} />
    </>
  );
}
