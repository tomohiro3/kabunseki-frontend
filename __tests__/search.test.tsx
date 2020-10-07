import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../pages/search';
import axios from 'axios';
import 'isomorphic-fetch';

describe('Test', () => {
  test('real fetch call', async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/users/1');
    // const result = await res.json();
  });

  test('test', () => {
    render(<Search />);
    screen.debug();
    expect(screen.getByText('市場・業種'));
  });
});
