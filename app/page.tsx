import Image from "next/image";
import BigButton from "./comp/button";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-3/5 flex items-end justify-center">
        {/* 사진파일에서 justify-center가 적용되지 않는문제
        그리고 image태그를 사용하는 부분
        flex적용시 사진이 길어지는 부분 알아보기 */}
        <Image
          src="/wifeflower.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="h-2/5">
        <p className="w-full h-1/5 mt-2 text-center font-semibold">
        사랑하는 henry & edward 출근 사진첩
        </p>
        <div className="w-full h-4/5 flex items-start justify-center mt-2">
          <BigButton value ='Start' href='/main' />
        </div>
      </div>
    </main>
  );
}
