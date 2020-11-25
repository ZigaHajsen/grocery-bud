import React, { useEffect } from 'react';

const Alert: React.FC<any> = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
