import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function NoArticleLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <section className="mx-auto flex min-h-[1100px] flex-col lg:w-[1000px]">
      <Header lng={lng} />
      <main className="flex justify-evenly ">
        <main className="mx-auto flex w-[90%]">{children}</main>
      </main>
      <Footer lng={lng} />
    </section>
  );
}
