import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';
import Provider from '../Provider';

describe('<Box/>', () => {
  it('Render', () => {
    const readyCallBack = jest.fn(() => {
      const node = screen.getByText('content');
      expect(node).toBeTruthy();
      expect(node.className).toEqual('h-10 w-10');
      expect(node.tagName.toLowerCase()).toEqual('div');
    });

    render(
      <Provider config={{ ready: readyCallBack }}>
        <Box h="10" w="10" href="#">
          content
        </Box>
      </Provider>
    );
  });

  it('Render with "AS"', () => {
    const readyCallBack = jest.fn(() => {
      const node = screen.getByText('Link');
      expect(node.tagName.toLowerCase()).toEqual('a');
      expect(node.getAttribute('href')).toEqual('http://www.web.com');
    });

    render(
      <Provider config={{ ready: readyCallBack }}>
        <Box as="a" href="http://www.web.com">
          Link
        </Box>
      </Provider>
    );
  });
});
