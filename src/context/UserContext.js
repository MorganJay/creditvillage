import { createContext, useState, useMemo, useCallback } from "react";

const UserContext = createContext();
UserContext.displayName = "UserContext";

const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [user, setUser] = useState(null);

  const handleUserEmailChange = useCallback((email) => setUserEmail(email), []);

  const enableFirstTimeUser = useCallback(() => setIsFirstTimeUser(true), []);

  const updateUserInfo = useCallback((user) => setUser(user), []);

  const contextValue = useMemo(
    () => ({
      userEmail,
      handleUserEmailChange,
      isFirstTimeUser,
      enableFirstTimeUser,
      user,
      updateUserInfo,
    }),
    [
      userEmail,
      handleUserEmailChange,
      isFirstTimeUser,
      enableFirstTimeUser,
      user,
      updateUserInfo,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
