import React from 'react';

const square = (className, letter, imagesStyleObject, imageSrc) => (
  <>
    <img
      className={className}
      alt={letter}
      style={imagesStyleObject}
      src={imageSrc}
    />
  </>
);

export default square;
