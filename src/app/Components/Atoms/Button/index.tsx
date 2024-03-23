"use client"

import { ReactElement } from "react";

const Button = ({
  children,
  size,
  bgColour,
  padding,
  rounded,
  border,
  onClick,
  disabled,
  type,
  id,
  selected,
}: Props): ReactElement => {
  return (
    <button
      title={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={id}
      aria-label={id}
      className={`
        ${size ? size : ''}
        ${bgColour ? bgColour : ''}
        ${padding ? padding : ''}
        ${rounded ? rounded : ''}
        ${border ? border : ''}
        ${disabled ? 'opacity-20' : 'cursor-pointer'}
        ${selected ? 'border border-2 border-borderGray' : 'border border-2 border-transparent'}
        hover:bg-opacity-80
      `}
    >
      {children}
    </button>
  );
};

interface Props {
  children?: ReactElement;
  size?: string;
  bgColour?: string;
  padding?: string;
  rounded?: string;
  border?: string;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'button';
  id: string;
  selected?: boolean;
}

export default Button;
