import Link from "next/link";

interface ButtonProps {
  value: string;
  href?: string; // 버튼에 표시될 텍스트를 나타내는 값
}

const BigButton: React.FC<ButtonProps> = ({ value, href }) => {
  if (href) {
    // href가 있을 경우 Link 컴포넌트를 사용
    return (
      <Link href={href} legacyBehavior>
        <a className='bg-green-800 rounded-sm text-white w-4/5 h-1/6 font-semibold text-xl flex justify-center items-center'>
          {value}
        </a>
      </Link>
    );
  } else {
    // href가 없을 경우 단순히 button 요소만 렌더링
    return (
      <button className='bg-green-800 rounded-sm text-white w-4/5 h-1/6 font-semibold text-xl flex justify-center items-center'>
        {value}
      </button>
    );
  }
};

export default BigButton;
