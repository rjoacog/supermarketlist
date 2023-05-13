import * as React from "react";

import styles from "./App.module.css";
import Input from "./Input";

const App: React.FC = () => {
  const [input, setInput] = React.useState(false);
  const [items, setItems] = React.useState<string[]>([]);
  const handleClick = () => {
    setInput(true);
  };

  const handleDelete = (index: number) => {
    if (!input) {
      const updatedItems = [...items];

      updatedItems.splice(index, 1);
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  React.useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem("items");

    if (itemsFromLocalStorage) {
      setItems(JSON.parse(itemsFromLocalStorage));
    }
  }, []);

  return (
    <main className={styles.container}>
      <h1 style={input ? {opacity: "20%"} : {opacity: "100%"}}>Supermarket list</h1>
      <h3 style={input ? {opacity: "20%"} : {opacity: "100%"}}>{items.length} item(s)</h3>
      <div className={styles.list} style={input ? {opacity: "20%"} : {opacity: "100%"}}>
        {items.map((i, index) => (
          <li key={index}>
            <ul>{i}</ul>
            <button className={styles.btnItem} onClick={() => handleDelete(index)}>
              delete
            </button>
          </li>
        ))}
      </div>
      <div className={styles.input}>
        {input ? <Input items={items} setInput={setInput} setItems={setItems} /> : ""}
      </div>
      <button
        className={styles.btnAddItem}
        style={input ? {opacity: "20%"} : {opacity: "100%"}}
        onClick={handleClick}
      >
        Add Item
      </button>
    </main>
  );
};

export default App;
