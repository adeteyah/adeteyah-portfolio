import React from 'react';

function Title({ children, className = '' }) {
  return (
    <h1 className={`text-2xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
