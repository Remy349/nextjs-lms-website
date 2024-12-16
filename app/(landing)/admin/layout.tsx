import { isAdminCreatedDB } from "@/services/db/user.db";

export default async function AdminLayout({
  createaccount,
  signin,
}: Readonly<{
  createaccount: React.ReactNode;
  signin: React.ReactNode;
}>) {
  const isAdminCreated = await isAdminCreatedDB();

  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        {isAdminCreated ? signin : createaccount}
      </div>
    </section>
  );
}
