import React from 'react';

const STYLES = ['btn--pr', 'btn--sc', 'btn--w', 'btn--d', 'btn--s'];

const SIZES = [
  'btn--sm',
  'btn--med',
  'btn--lg',
  'btn--xl',
  'btn--sm--full',
  'btn--med--full',
  'btn--lg--full',
  'btn--xl--full',
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className="btn ${checkButtonStyle} ${checkButtonSize}}"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
