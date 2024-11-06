import { createContext, useState } from "react";

export const AuthModalContext = createContext();

const AuthModalProvider = ({ children }) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  return (
    <AuthModalContext.Provider value={{ isAuthModal, setIsAuthModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalProvider;
