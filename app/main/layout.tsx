import Link from "next/link";

export default function Mainlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <header className="w-full h-12 flex justify-end items-center">
      <Link href={'/upload'}>
        <div className="mr-4 text-4xl">🔺</div>
      </Link>
      {/* 업로드 버튼 교체 예정 */}
    </header>
    <div className="w-full h-full">{children}</div>
  </>
  );
}