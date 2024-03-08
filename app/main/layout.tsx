export default function Mainlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
  <header className="w-full h-12 outline flex justify-end items-center">
    <div className="mr-4 text-4xl">🔺</div>
  </header>
    <div className="w-full h-full outline">{children}</div>
  </>
  );
}