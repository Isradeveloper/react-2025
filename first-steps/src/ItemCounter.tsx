import { useState } from 'react';

import styles from './ItemCounter.module.css';

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <section className={styles.section}>
        <h3>{name}</h3>

        <button
          className={styles.counterButton}
          onClick={handleSubtract}>
          -1
        </button>

        <span>{count}</span>

        <button
          className={styles.counterButton}
          onClick={handleAdd}>
          +1
        </button>
      </section>
    </>
  );
};
