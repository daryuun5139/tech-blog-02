import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function ArticleListLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <section className="mx-auto flex flex-col justify-center lg:w-[1000px]">
      {/* <Header lng={lng} /> */}
      <Header lng={lng} />
      <main className="flex min-h-[1300px] items-start justify-between">
        <div className="flex w-full flex-col justify-center py-5 lg:w-[700px]">{children}</div>
        <SideBar lng={lng} />
      </main>
      <Footer lng={lng} />
    </section>
  );
}
