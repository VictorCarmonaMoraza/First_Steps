const name = "Pedro";
const lastName = "Rodriguez";

const favorite = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;

const adress = {
  zipCode: "ABC-123",

  country: "Canada",
};
export function MyAwesomeApp() {
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      {/* Unidos por una coma */}
      <p>{favorite.join(", ").toUpperCase()}</p>

      <h1>{isActive ? "Activo" : "Inactivo"}</h1>
      <p>{JSON.stringify(adress)}</p>
    </>
  );
}
