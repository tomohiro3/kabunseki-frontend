import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../pages/search';

describe('Search', () => {
  test('Displaying search category modal', () => {
    render(<Search />);
    expect(screen.getByText('市場・業種'));
    userEvent.click(screen.getByText('市場・業種'));
    screen.debug();
  });
});
