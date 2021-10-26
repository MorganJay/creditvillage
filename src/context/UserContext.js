import { createContext, useState, useMemo, useCallback } from "react";

const UserContext = createContext();
UserContext.displayName = "UserContext";

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [userEmail, setUserEmail] = useState("");

  const handleUserEmailChange = useCallback((email) => setUserEmail(email), []);

  const contextValue = useMemo(
    () => ({
      userEmail,
      handleUserEmailChange,
    }),
    [userEmail, handleUserEmailChange]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
