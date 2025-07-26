import React from "react";

function GridX({ children, className = "" }) {
  const hasGap = /gap-\d/.test(className);
  const gapClass = hasGap ? "" : "gap-4";

  return (
    <div className={`grid lg:flex flex-row ${gapClass} ${className}`}>
      {children}
    </div>
  );
}

export default GridX;
