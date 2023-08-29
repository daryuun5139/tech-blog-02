import SideBar from "@/components/SideBar";

export default function ArticleListLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <main className="flex justify-between">
        <div className="flex w-full flex-col justify-center py-5 lg:w-[700px]">{children}</div>
        <SideBar />
      </main>
    </section>
  );
}
