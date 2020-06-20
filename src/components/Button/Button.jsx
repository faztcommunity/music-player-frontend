import React from 'react';

function Button({ children, className, primary, ...rest }) {
  const style = primary ? 'primary' : 'secondary';

  return (
    <button {...rest} className={`button button--${style} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
