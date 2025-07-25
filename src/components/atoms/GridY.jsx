import React from 'react';

function GridY({ children, className = '' }) {
  const hasGap = /gap-\d/.test(className);
  const gapClass = hasGap ? '' : 'gap-4';

  return (
    <div className={`flex flex-col ${gapClass} ${className}`}>{children}</div>
  );
}

export default GridY;
