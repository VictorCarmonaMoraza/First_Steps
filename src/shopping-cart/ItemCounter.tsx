import { CSSProperties, useState } from "react";
import { ItemCounterProps } from "./ItemCounterProps";

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

  //   const handleClick = () => {
  //     console.log(`Click en ${name}`);
  //   };
  const estilo: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  };
  return (
    <section style={estilo}>
      <span
        style={{
          width: 150,
        }}
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
