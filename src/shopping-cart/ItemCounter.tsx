import { CSSProperties } from "react";

export const ItemCounter = () => {
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
        Nintendo
      </span>
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  );
};
