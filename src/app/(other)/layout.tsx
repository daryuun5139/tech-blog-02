export default async function NoArticleLayout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto flex w-[90%]">{children}</main>;
}
