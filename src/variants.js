export const slideIn = (direction = 'left', delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'spring',
          duration: 5,
          delay: delay,
          stiffness: 80,
        },
      },
    };
  };
  