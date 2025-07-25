import { auth } from "@/auth";
import { Button } from "@mui/material";
import Image from "next/image";

export default async function profile() {
  const session = await auth();
  console.log(session);

  return (
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

        <form>
          <Button className="w-full" variant="contained" color="error">
            Log Out
          </Button>
        </form>
      </div>
    </main>
  );
}
