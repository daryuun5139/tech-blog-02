import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function ArticleDetailLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <section className="mx-auto flex flex-col lg:w-[1200px]">
      <Header lng={lng} />
      <main className="flex  justify-evenly">
        <div className="flex w-full flex-col justify-center py-5 lg:w-[850px]">{children}</div>
        <SideBar lng={lng} />
      </main>
      <Footer lng={lng} />
    </section>
  );
}
