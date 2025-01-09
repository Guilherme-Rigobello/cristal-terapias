import React from 'react';

const TitleWithIcon = ({
  text,
  icon,
  alignmentClass = 'justify-start', 
  className = '',
  addMargin = true, 
}) => {
  const titleClass = `${alignmentClass} ${className}`;
  
  return (
    <h1 className={`text-teal-600 text-4xl font-semibold flex items-center max-md:text-3xl ${titleClass}`}>
      {text}
      {icon && (
        <span className={`bg-teal-100 text-3xl rounded-full p-3 ${addMargin ? 'ml-4' : ''}`}>
          {icon}
        </span>
      )}
    </h1>
  );
};

export default TitleWithIcon;