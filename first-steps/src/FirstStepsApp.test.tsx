import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';

// vi.mock('./ItemCounter.tsx', () => ({
//   ItemCounter: () => <div data-testid="item-counter" />,
// }));

const mockItemCounter = vi.fn((props: unknown) => (
  <div data-testid="item-counter" />
));

vi.mock('./ItemCounter.tsx', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the first steps app', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of item counters', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('item-counter');

    expect(itemCounters).toHaveLength(4);
  });

  test('should render item counters with the correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(4);

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Xbox Series X',
      quantity: 0,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Xbox Series S',
      quantity: 0,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'PlayStation 5',
      quantity: 0,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch',
      quantity: 0,
    });
  });
});
