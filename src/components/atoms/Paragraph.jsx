import React from 'react';

function Paragraph({ children, className = '' }) {
  return <p className={`text-base text-gray-700 ${className}`}>{children}</p>;
}

export default Paragraph;
