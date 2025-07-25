import React from 'react';

function Image({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full rounded object-cover ${className}`}
    />
  );
}

export default Image;
