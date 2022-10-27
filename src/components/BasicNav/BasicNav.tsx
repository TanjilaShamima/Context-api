import React from "react";
import LogedInNav from "./LogedInNav";
import LogedOutNav from "./LogedOutNav";
import { UserConsumer } from "../../hooks/useContext";

const BasicNav = () => {
  return (
    <UserConsumer>
      {({ userDetails }) => (
        <div>
          {userDetails.isAuthentication ? <LogedInNav /> : <LogedOutNav />}
        </div>
      )}
    </UserConsumer>
  );
};

export default BasicNav;
