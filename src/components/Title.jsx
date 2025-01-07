import React from 'react';

const TitleWithIcon = ({
  text,
  icon,
  alignmentClass = 'justify-start',
  className = '',
}) => {
  return (
    <h1
      className={`text-teal-600 text-4xl font-semibold flex items-center max-md:text-3xl ${alignmentClass} ${className}`}
    >
      {text}
      {icon && (
        <span className={`ml-4 bg-teal-100 text-3xl rounded-full p-3 ${className}`}>
          {icon}
        </span>
      )}
    </h1>
  );
};

export default TitleWithIcon;