import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { LayouterProvider as Provider } from './Provider';
import { describe, expect, it } from 'vitest';

describe('<Provider/>', () => {
  it('Simple', () => {
    render(<Provider>Content</Provider>);

    waitFor(() => {
      expect(window).toHaveProperty('layouter');
    });
  });
});
