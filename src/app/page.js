import prisma from "@/utils/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1>Setup boilerplate</h1>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>{user.name}</p>
          </>
        );
      })}
    </div>
  );
}
