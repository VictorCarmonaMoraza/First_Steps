import { CSSProperties } from "react";

const name = "Pedro";
const lastName = "Rodriguez";

const favorite = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;

const adress = {
  zipCode: "ABC-123",

  country: "Canada",
};
const myStyle: CSSProperties = {
  backgroundColor: "red",
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop: 30,
};
export function MyAwesomeApp() {
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      {/* Unidos por una coma */}
      <p style={{ backgroundColor: "yellow" }}>
        {favorite.join(", ").toUpperCase()}
      </p>

      <h1>{isActive ? "Activo" : "Inactivo"}</h1>
      <p style={myStyle}>{JSON.stringify(adress)}</p>
    </>
  );
}
