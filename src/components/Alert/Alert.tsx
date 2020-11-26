import React, { useEffect } from 'react';
import { ListModel, AlertModel } from '../../models/models';

interface AlertProps {
  alert: AlertModel;
  removeAlert: Function;
  list: ListModel[];
}

const Alert: React.FC<AlertProps> = ({ alert, removeAlert, list }) => {
  const { msg, type } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
