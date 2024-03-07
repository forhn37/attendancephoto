import Image from "next/image";
import BigButton from "../comp/button";

export default function Main() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-3/5 flex items-end ">
        <Image
          src="/wifeflower.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="h-2/5">
        <p className="w-full h-1/5 mt-2 text-center">
        사랑하는 henry & edward 출근 사진첩
        </p>
        <div className="w-full h-4/5 flex items-start justify-center mt-2">
          <BigButton value ='Start' href='/main' />
        </div>
      </div>
    </main>
  );
}
