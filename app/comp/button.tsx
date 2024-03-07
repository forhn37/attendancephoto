import Link from "next/link";

interface ButtonProps {
  value: string;
  href : string; // 버튼에 표시될 텍스트를 나타내는 값
}

const BigButton: React.FC<ButtonProps> = ({ value, href }) => {
  return (
    <Link href={href} className='bg-green-800 rounded-lg text-white w-4/5 h-1/6 font-semibold text-xl flex justify-center items-center'>
      <button >
        {value}
      </button>
    </Link>
  );
};

export default BigButton;