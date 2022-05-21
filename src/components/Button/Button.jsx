import React from 'react';
import '../../styles/button.scss';

const STYLES = [
  'btn--primary',
  'btn--warning',
  'btn--danger',
  'btn--success',
  'btn--dark',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
];

const Button = ({ text, type, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
