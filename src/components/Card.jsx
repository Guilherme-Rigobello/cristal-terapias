import React from 'react';

const Card = ({ imgSrc, title, description, icon }) => {
  return (
    <div className='w-80 p-6 bg-white rounded-xl transform transition-all hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl cursor-pointer max-[800px]:justify-center'>
      <img className='h-40 w-full mb-5' src={imgSrc} alt={title} />
      <div className='p-1'>
        <h2 className='font-bold text-lg mb-4 flex justify-start items-center '>
          {icon && <span className='mr-3 bg-teal-100 rounded-full p-2 text-teal-600 text-2xl'>{icon}</span>}
          {title}
        </h2>
        <p className='text-sm leading-6 text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
