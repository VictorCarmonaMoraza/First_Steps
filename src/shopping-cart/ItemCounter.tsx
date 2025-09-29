import { CSSProperties } from "react";
import { ItemCounterProps } from "./ItemCounterProps";

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
  const handleClick = () => {
    console.log(`Click en ${name}`);
  };
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
        onClick={() => {
          console.log(`Click ${name}`);
        }}
      >
        +1
      </button>
      <span>{quantity}</span>
      <button onClick={handleClick}>-1</button>
    </section>
  );
};
