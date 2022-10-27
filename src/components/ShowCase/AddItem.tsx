import React, { useState } from "react";
import { UserConsumer } from "../../hooks/useContext";

const AddItem = () => {
  const [newItem, setNewItem] = useState<string>("");
  return (
    <UserConsumer>
      {({ isShowCase }) => (
        <div>
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
          <button
            onClick={() => {
              isShowCase(newItem);
              setNewItem("");
            }}
          >
            submit
          </button>
        </div>
      )}
    </UserConsumer>
  );
};

export default AddItem;
