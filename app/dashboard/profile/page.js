import { auth, signOut } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import { Button } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function profile() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <AuthorizationCheck />
      <main className="min-screen-h flex justify-center py-4 md:px-12 lg:py-8 px-2 bg-gray-100">
        <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 md:p-6">
          <div className="flex justify-center">
            <Image
              width={80}
              height={80}
              src={session?.user?.image}
              alt="profile"
              className="w-[80px] h-[80px] rounded-full"
            />
          </div>
          <p className="text-center py-3 border-b border-gray-600">
            {session?.user?.name}
          </p>
          <p className="text-center py-3 border-b border-gray-600">
            {session?.user?.email}
          </p>
          <p className="text-center py-3 border-b border-gray-600">
            {session?.user?.id}
          </p>

          <form
            action={async () => {
              "use server";
              await signOut();
              redirect("/auth/signin");
            }}
          >
            <Button
              type="submit"
              className="w-full"
              variant="contained"
              color="error"
            >
              Log Out
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
