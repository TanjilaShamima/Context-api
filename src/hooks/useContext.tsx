import { createContext, PropsWithChildren, useState } from "react";

export type UserType = {
  name: string;
  email: string;
  mobile: string;
  languages: string[];
};

export type UserDataType = {
  user: UserType;
  isAuthentication: boolean;
};

export type UserContext = {
  userDetails: UserDataType;
  logIn?: () => void;
  logOut?: () => void;
  isShowCase?: (item: string) => void;
};

export const initialUserData: UserDataType = {
  user: {
    name: "Tanjila Shamima",
    email: "tanjilashamima@gmail.com",
    mobile: "123456789",
    languages: ["c", "c++", "javascript"],
  },
  isAuthentication: true,
};

const initialContext: UserContext = {
  userDetails: initialUserData,
};

let Context: React.Context<UserContext> | null = null;

const { Consumer, Provider } = (Context =
  createContext<UserContext>(initialContext));

interface UserProviderProps {}

const UserProvider = ({ children }: PropsWithChildren<UserProviderProps>) => {
  const [userDetails, setUserDetails] = useState<UserDataType>(initialUserData);

  const logIn = () => {
    setUserDetails({
      ...userDetails,
      isAuthentication: true,
    });
  };

  const logOut = () => {
    setUserDetails({
      ...userDetails,
      isAuthentication: false,
    });
  };

  const isShowCase = (item: string) => {
    setUserDetails({
      ...userDetails,
      user: {
        ...userDetails.user,
        languages: [...userDetails.user.languages, item],
      },
    });
  };

  return (
    <Provider
      value={{
        userDetails,
        logIn: logIn,
        logOut: logOut,
        isShowCase: isShowCase,
      }}
    >
      {children}
    </Provider>
  );
};

export { UserProvider, Consumer as UserConsumer, Context as UserContext }