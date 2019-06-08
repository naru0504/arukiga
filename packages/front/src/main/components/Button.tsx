import * as React from 'react';

export const Button = ({ children, ...others }: any) => {
  return <button {...others}>{children || 'hoge'}</button>;
};
