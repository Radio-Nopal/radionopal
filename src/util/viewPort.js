import React, { createContext, useState, useContext, useEffect } from 'react';

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return <viewportContext.Provider value={{ width }}>{children}</viewportContext.Provider>;
};

export const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
};
