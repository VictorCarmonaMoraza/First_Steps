import { CSSProperties } from "react";
import { ItemCounterProps } from "./ItemCounterProps";

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
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
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
