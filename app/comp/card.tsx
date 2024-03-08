import Image from 'next/image';
export default function Card() {
  return (
    <div className='h-full w-full '>
      <Image
        src="/.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div>
        <div></div>  
        <div></div>
      </div>
      <div>
        <title></title>
        <p></p>
      </div>

    </div>
  )
}