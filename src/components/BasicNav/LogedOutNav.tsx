import React from "react";
import { UserConsumer } from "../../hooks/useContext";


const LogedOutNav = () => {
  return (
    <UserConsumer>
      {({ logIn }) => (
        <div>
          <p>Please click to login</p>
          <button onClick={logIn}>Log in</button>
        </div>
      )}
    </UserConsumer>
  );
};

export default LogedOutNav;
