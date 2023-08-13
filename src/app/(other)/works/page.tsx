export default function Works() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center py-12 lg:w-[90%]">
        <h1 className="title-deco py-4">
          <span>works</span>
        </h1>
        {/* フィールド１つ目 */}
        <div className="my-4 flex w-full justify-between rounded-md bg-[#FFFDF0] p-5 px-7">
          <div className="flex h-80 w-[45%] items-center justify-center rounded-md border-[1px] border-black bg-white">
            <p className="card-text text-lg">coming soon</p>
          </div>
          <div className="my-auto ml-10 items-center bg-[#FFFDF0] px-2 text-black">
            <h2 className="card-text text-lg">サイト名：東京R不動産</h2>
            <h3 className="card-text text-lg ">概要：</h3>
            <p className="card-text text-base">
              東京にある少し風変わりな不動産物件を掲載するサイト。
            </p>
            <p className="card-text text-base">
              物件サイトを見るのが好きなので自分で作成してみました。
            </p>
            <h4 className="card-text text-lg ">使用した技術：</h4>
            <p className="card-text text-base">Next.js, tailwind, Typescript, microcms</p>
          </div>
        </div>
        {/* フィールド２つ目 */}
        <div className="my-4 flex w-full justify-between rounded-md bg-[#FFFDF0] p-5 px-7">
          <div className="flex h-80 w-[45%] items-center justify-center  rounded-md border-[1px] border-black bg-white">
            <p className="card-text text-lg">coming soon</p>
          </div>
          <div className="my-auto ml-10 items-center bg-[#FFFDF0] px-2 text-black">
            <h2 className="card-text text-lg">サイト名：東京R不動産</h2>
            <h3 className="card-text text-lg ">概要：</h3>
            <p className="card-text text-base">
              東京にある少し風変わりな不動産物件を掲載するサイト。
            </p>
            <p className="card-text text-base">
              物件サイトを見るのが好きなので自分で作成してみました。
            </p>
            <h4 className="card-text text-lg ">使用した技術：</h4>
            <p className="card-text text-base">Next.js, tailwind, Typescript, microcms</p>
          </div>
        </div>
      </div>
    </>
  );
}
