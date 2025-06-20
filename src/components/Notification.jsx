import React from 'react';

const Notification = ({ message, type }) => {
  if (!message) return null;

  const baseStyle = "px-4 py-2 rounded shadow mb-4 text-sm text-white";
  const styles = {
    success: `${baseStyle} bg-green-500`,
    error: `${baseStyle} bg-red-500`,
    info: `${baseStyle} bg-blue-500`,
  };

  return <div className={styles[type] || styles.info}>{message}</div>;
};

export default Notification;
