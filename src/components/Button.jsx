// BUTTON
const Button = ({ text }) => {
  return (
    <button className='bg-teal-500 text-white h-9 w-[180px] rounded-[2rem] font-medium text-sm border-[1px] border-solid border-customRGB duration-300 hover:bg-transparent hover:text-teal-700 '>
      {text}
    </button>
  );
};

export default Button;
