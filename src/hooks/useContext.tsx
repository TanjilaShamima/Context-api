import { createContext, ReactNode, useState } from "react";
import { initialUserData, UserDataType } from "../App";

let Context = null

const {Consumer, Provider} = Context = createContext({} as any)

interface Props {
    children: ReactNode | ReactNode[]
}

const UserProvider: React.FC<Props> = ({children}) => {
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
    <Provider value={{
        ...userDetails,
        logIn: logIn,
        logOut: logOut,
        isShowCase: isShowCase,
      }}>
        {children}
    </Provider>
  )
};




export {UserProvider, Consumer as UserConsumer, Context as UserContext}
