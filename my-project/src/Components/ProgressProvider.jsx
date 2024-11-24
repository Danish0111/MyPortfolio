import React, { useState, useEffect } from 'react';

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(valueEnd);
    }, 500); // Adjust the delay if needed

    return () => clearTimeout(timeout);
  }, [valueEnd]);

  return children(value);
};

export default ProgressProvider;
