import React from "react";



const Input = ({
  type,
  className,
  id,
  placeHolder,
  name,
  register
}) => {
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeHolder}
      name={name}
      ref={register}
    />
  );
};

export default Input;
