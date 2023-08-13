export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
