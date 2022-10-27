import "./App.css";
import BasicNav from "./components/BasicNav/BasicNav";
import ShowCase from "./components/ShowCase/ShowCase";
import { UserConsumer, UserProvider } from "./hooks/useContext";

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

export const initialUserData: UserDataType = {
  user: {
    name: "Tanjila Shamima",
    email: "tanjilashamima@gmail.com",
    mobile: "123456789",
    languages: ["c", "c++", "javascript"],
  },
  isAuthentication: true,
};

function App() {
  return (
    <UserProvider>
      <div style={{ width: "40%", margin: "20px auto" }}>
        <UserConsumer>
          {({ userDetails }) => (
            <>
              <BasicNav />
              <hr />
              {userDetails.isAuthentication && <ShowCase />}
            </>
          )}
        </UserConsumer>
      </div>
    </UserProvider>
  );
}

export default App;
