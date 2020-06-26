import React from 'react';

function Input({ children, className, ...rest }) {
  return <input {...rest} className={'input ' + className}></input>;
}

export default Input;
