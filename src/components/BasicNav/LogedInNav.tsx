import React from "react";
import { UserConsumer } from "../../hooks/useContext";

const LogedInNav = () => {
  return (
    <UserConsumer>
      {({ userDetails, logOut }) => (
        <div>
          <p>
            {userDetails.user.name} are logged in as {userDetails.user.email}
          </p>
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </UserConsumer>
  );
};

export default LogedInNav;
