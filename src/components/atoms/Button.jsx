import React from "react";

function Button({ children, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1.5 bg-neutral-200 text-neutral-600 hover:text-neutral-400 hover:bg-neutral-800 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
