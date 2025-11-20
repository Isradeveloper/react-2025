import type { CSSProperties } from 'react';
import { ItemCounter } from './ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: 'Xbox Series X',
    quantity: 0,
  },
  {
    productName: 'Xbox Series S',
    quantity: 0,
  },
  {
    productName: 'PlayStation 5',
    quantity: 0,
  },
  {
    productName: 'Nintendo Switch',
    quantity: 0,
  },
];

export function FirstStepsApp() {
  const myStyles: CSSProperties = {
    color: 'red',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  };

  return (
    <>
      <h1 style={myStyles}>Carrito de compras</h1>
      {/* <ItemCounter name="Xbox Series X" quantity={0} />
      <ItemCounter name="Xbox Series S" quantity={0} />
      <ItemCounter name="PlayStation 5" quantity={0} />
      <ItemCounter name="Nintendo Switch" quantity={0} /> */}

      {
        itemsInCart.map(({productName, quantity}) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }
    </>
  );
}
