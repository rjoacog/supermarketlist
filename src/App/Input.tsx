import * as React from "react";

import styles from "./Input.module.css";
import { Props } from "./types/types";

const Input: React.FC<Props> = ({ setInput, items, setItems }) => {
  const handleClickClose = () => {
    setInput(false);
  };

  const [newItems, setNewItems] = React.useState("");

  function handleNewItems(event: any) {
    setNewItems(event.target.value);
  }

  function addNewItems(event: any) {
    event.preventDefault();
    if (newItems !== "") {
      setItems([...items, newItems]);
      localStorage.setItem("items", JSON.stringify([...items, newItems]));
      setNewItems("");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add item</h1>
      <input
        placeholder="ingrese su item"
        type="text"
        value={newItems}
        onChange={handleNewItems}
      />
      <div className={styles.btns}>
        <button className={styles.btnClose} onClick={handleClickClose}>
          Close
        </button>
        <button
          className={styles.btnAdd}
          style={
            newItems !== "" ? { cursor: "pointer" } : { cursor: "no-drop" }
          }
          onClick={addNewItems}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
