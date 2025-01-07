// IMPORT ICONS
import { RiWhatsappFill } from 'react-icons/ri';
// BUTTON
const Button = ({ text }) => {
  return (
    <button className='bg-teal-500 text-white h-10 w-[190px]  rounded-[2rem] font-medium border-[1px] border-solid border-customRGB duration-300 hover:bg-transparent hover:text-teal-700 flex items-center justify-center'>
      {text}
      <RiWhatsappFill className='ml-2 text-lg' />
    </button>
  );
};

export default Button;
