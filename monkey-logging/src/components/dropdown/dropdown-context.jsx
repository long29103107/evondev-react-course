import { createContext, useState } from 'react';

const DropdownContext = createContext();

const DropdownProvider = (props) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return <DropdownContext.Provider value={values}>{props.children}</DropdownContext.Provider>;
};

export { DropdownProvider, DropdownContext };
