import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter name="Nintendo" quantity={10} />
      <ItemCounter name="Pro Controller" quantity={11} />
      <ItemCounter name="Super Smash" quantity={13} />
    </>
  );
}
