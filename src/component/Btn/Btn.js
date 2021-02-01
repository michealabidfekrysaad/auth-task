import React from "react";

const Btn = ({
  className,
  isDisabled,
  type,
  content,
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Btn;
