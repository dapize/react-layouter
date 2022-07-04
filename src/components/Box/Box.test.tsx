import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';
import Provider from '../Provider';

describe('<Box/>', () => {
  it('Simple', () => {
    render(
      <Provider>
        <Box w="100" h="100">
          content
        </Box>
      </Provider>
    );

    const content = screen.getByText('content');
    expect(content.classList.contains('w-100')).toBeTruthy();
    expect(content.classList.contains('h-100')).toBeTruthy();
  });

  it('Simple with className', () => {
    render(
      <Provider>
        <Box marginTop="10 20@sm" className="square" b="40">
          content
        </Box>
      </Provider>
    );

    const content = screen.getByText('content');
    expect(content.classList.contains('mt-10')).toBeTruthy();
    expect(content.classList.contains('mt-20@sm')).toBeTruthy();
    expect(content.classList.contains('b-40')).toBeTruthy();
    expect(content.classList.contains('square')).toBeTruthy();
  });

  it('Render with "AS"', () => {
    render(
      <Provider>
        <Box as="a" href="http://www.web.com">
          Link
        </Box>
      </Provider>
    );
    const node = screen.getByText('Link');
    expect(node.tagName.toLowerCase()).toEqual('a');
    expect(node.getAttribute('href')).toEqual('http://www.web.com');
  });
});
