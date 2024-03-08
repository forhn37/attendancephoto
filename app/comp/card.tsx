import Image from 'next/image';

export default function Card() {
  return (
    <div className='h-full w-full '>
      <div className='flex justify-center items-center'>
      <Image
        src="/rijamong.png"
        width={400}
        height={400}
        alt="Picture of the author" 
      />
      </div>
      <div className='flex justify-end items-center pr-3'>
        <div className='flex justify-center flex-col items-center'>
          <div className='text-3xl'>🤍</div>
          <p className='text-xs'>하나미확인</p>
        </div>
        <div className='flex justify-center flex-col items-center ml-2'>
          <div className='text-3xl'>💾</div>
          <p className='text-xs'>다운로드</p>
        </div>
      </div>
      <div>
        <div className='font-semibold ml-3'>
          <div>2024.03.08 08.15</div>
          <h2 >우리하현이 출근해유</h2>
        </div>
        <textarea
          className='w-full h-20 rounded-md mt-2 px-3 py-2'
          defaultValue="하현이 아침에 잘 출근했스요"
        />
      </div>
    </div>
  )
}