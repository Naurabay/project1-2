import React from 'react';

const RedirectButton = () => {
  const handleClick = () => {
    window.location.href = 'https://master--meek-haupia-56f805.netlify.app';
  };

  return (
    <button onClick={handleClick}>
     Go to Space
    </button>
  );
};

export default RedirectButton;