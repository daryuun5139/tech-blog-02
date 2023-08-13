import SideBar from "@/components/SideBar";

export default function WithArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <main className="flex justify-center">
        <div className="flex w-[90%] flex-col justify-center py-5 lg:w-[64%]">{children}</div>
        <SideBar />
      </main>
    </section>
  );
}
