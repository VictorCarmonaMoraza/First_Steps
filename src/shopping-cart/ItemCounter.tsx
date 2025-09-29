import { useState } from "react";
import { ItemCounterProps } from "./ItemCounterProps";
import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {
  //Los hooks van al principio
  const [count, setCount] = useState(quantity);

  const hadleAdd = () => {
    setCount(count + 1);
  };
  const hadleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className={styles["item-row"]}>
      <span
        className={`${count === 1 ? "counter-red" : "counter-black"} item-text`}
      >
        {name}
      </span>
      <button
        onMouseEnter={() => {
          console.log(`Mouse Enter ${name}`);
        }}
        // onClick={() => {
        //   console.log(`Click ${name}`);
        // }}
        onClick={hadleAdd}
      >
        +1
      </button>
      <span>{count}</span>
      {/* <button onClick={handleClick} onClick={hadleSubtract}> */}
      <button onClick={hadleSubtract}>-1</button>
    </section>
  );
};
