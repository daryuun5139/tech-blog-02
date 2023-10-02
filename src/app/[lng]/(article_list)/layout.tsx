import SideBar from "@/components/SideBar";

export default function ArticleListLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <section>
      <main className="flex justify-between">
        <div className="flex w-full flex-col justify-center py-5 lg:w-[700px]">{children}</div>
        <SideBar lng={lng} />
      </main>
    </section>
  );
}
