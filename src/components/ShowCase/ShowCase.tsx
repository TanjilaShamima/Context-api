import React from "react";
import { UserConsumer } from "../../hooks/useContext";
import AddItem from "./AddItem";
import ItemListItemList from "./ItemListItemList";

const ShowCase= () => {
  return (
    <UserConsumer>
      {({userDetails}) => (
        <div>
          <p>{userDetails.user.name}</p>
          <AddItem />
          <ItemListItemList />
        </div>
      )}
    </UserConsumer>
  );
};

export default ShowCase;
