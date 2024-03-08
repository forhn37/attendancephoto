import Image from "next/image";
import BigButton from "../comp/button";

export default function Upload() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-3/5 flex items-end justify-center">
        {/* 사진파일에서 justify-center가 적용되지 않는문제
        그리고 image태그를 사용하는 부분
        flex적용시 사진이 길어지는 부분 알아보기 */}
        <Image
          src="/ni.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        {/* 썸네일 적용예정 */}
      </div>
      <div className="h-2/5 w-full">

        <div className="h-1/5 flex flex-col justify-end items-end mr-2">
          <input type="file" className="hidden" id="fileInput" accept="image/*" />
          <label htmlFor="fileInput" className="text-3xl">💽</label>
          <p className="text-sm">사진올려요!</p>
        </div>
        <div className="h-2/5 w-full font-semibold">
          <p>write</p>
          <textarea
            className='w-full h-20 rounded-md mt-2 px-3 py-2 outline'
          />
        </div>
        <div className="h-2/5 w-full flex justify-center items-start">
          <BigButton value="upload" />
        </div>
      </div>
    </main>
  );
}
