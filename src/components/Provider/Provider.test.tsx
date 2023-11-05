import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { LayouterProvider } from './Provider';

describe('<LayouterProvider/>', () => {
  it('Simple', () => {
    render(<LayouterProvider>Content</LayouterProvider>);

    waitFor(() => {
      expect(window).toHaveProperty('react-layouter');
    });
  });
});
