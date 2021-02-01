import React from "react";



const Input = ({
  type,
  className,
  id,
  placeHolder,
  value,
  onBlur,
  onChange,
  name
}) => {
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeHolder}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
