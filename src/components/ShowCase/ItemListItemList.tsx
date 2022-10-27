import React from "react";
import { UserConsumer } from "../../hooks/useContext";


const ItemListItemList = () => {
  return (
    <UserConsumer>
      {({userDetails}) => (
        <div>
          <ul>
            {userDetails.user.languages.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </UserConsumer>
  );
};

export default ItemListItemList;
