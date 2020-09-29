import React from 'react';
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Search from '../pages/search';

describe('Test', () => {
  test('test', () => {
    render(<Search />);
    screen.debug();
    expect(screen.getByText("市場・業種"));
  })
})