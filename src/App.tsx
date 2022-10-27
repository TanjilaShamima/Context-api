import "./App.css";
import BasicNav from "./components/BasicNav/BasicNav";
import ShowCase from "./components/ShowCase/ShowCase";
import { UserConsumer, UserProvider } from "./hooks/useContext";

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
