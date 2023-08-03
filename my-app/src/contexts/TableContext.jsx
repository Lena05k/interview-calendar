import React, { useState, createContext } from 'react';

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  return (
    <TableContext.Provider value={{ isDeleteVisible, setIsDeleteVisible }}>
      {children}
    </TableContext.Provider>
  );
};
