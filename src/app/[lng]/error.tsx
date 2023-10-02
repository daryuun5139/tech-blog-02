"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="md:pt-50 pt-40">
      <p className="text-center">サーバーでのデータの取得に失敗しました。</p>
    </div>
  );
};

export default Error;
