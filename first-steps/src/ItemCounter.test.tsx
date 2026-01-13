import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ItemCounter', () => {
  test('should render the item counter', () => {
    const { container } = render(
      <ItemCounter
        name="Xbox Series X"
        quantity={0}
      />
    );

    const h3 = container.querySelector('h3');
    expect(h3?.innerHTML).toContain('Xbox Series X');
  });

  test('should render the item counter - screen', () => {
    render(
      <ItemCounter
        name="Xbox Series X"
        quantity={0}
      />
    );

    const h3 = screen.getByTestId('h3-name');
    expect(h3.innerHTML).toContain('Xbox Series X');
  });

  test('should match snapshot', () => {
    const { container } = render(
      <ItemCounter
        name="Xbox Series X"
        quantity={0}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render with default values', () => {
    const name = 'Test item';

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const name = 'Test item';
    const quantity = 10;

    render(
      <ItemCounter
        name={name}
        quantity={quantity}
      />
    );

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    render(
      <ItemCounter
        name="Test item"
        quantity={1}
      />
    );

    const [, addButton] = screen.getAllByRole('button');

    fireEvent.click(addButton);

    expect(screen.getByText('2')).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    render(
      <ItemCounter
        name="Test item"
        quantity={1}
      />
    );

    const [subtractButton] = screen.getAllByRole('button');

    fireEvent.click(subtractButton);

    expect(screen.getByText('0')).toBeDefined();
  });

  test('should not decrease count when -1 button is pressed and count is 0', () => {
    render(
      <ItemCounter
        name="Test item"
        quantity={0}
      />
    );

    const [subtractButton] = screen.getAllByRole('button');

    fireEvent.click(subtractButton);

    expect(screen.getByText('0')).toBeDefined();
  });

  // test('should color black', () => {
  //   render(
  //     <ItemCounter
  //       name="Test item"
  //       quantity={1}
  //     />
  //   );

  //   const itemText = screen.getByText('1');

  //   expect(itemText.style.color).toBe('black');
  // });

  test('');
});
