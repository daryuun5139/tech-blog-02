import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>該当する記事はありませんでした</p>
      <Link href="/">トップページに戻る</Link>
    </div>
  );
}
