import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Provider from '../Provider';

describe('<Provider/>', () => {
  it('Simple', () => {
    render(<Provider>Content</Provider>);

    waitFor(() => {
      expect(window).toHaveProperty('layouter');
    });
  });
});
