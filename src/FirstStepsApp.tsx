import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo", quantity: 12 },
  { productName: "Pro Controller", quantity: 3 },
  { productName: "Nintendo 2", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Nintendo" quantity={10} />
      <ItemCounter name="Pro Controller" quantity={11} />
      <ItemCounter name="Super Smash" quantity={13} /> */}
      {/* FORMA 1 */}
      <p>FORMA 1</p>
      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
      <hr />
      <p>FORMA 2</p>
      {/* FORMA 2 */}
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
