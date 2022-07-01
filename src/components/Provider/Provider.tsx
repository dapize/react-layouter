import React, { FC, useLayoutEffect } from 'react';
import layouter, { IConfigUser } from 'layouter.js';

export interface IProvider {
  config?: Partial<IConfigUser>;
  children: React.ReactNode;
}

const Provider: FC<IProvider> = ({ config = {}, children }) => {
  useLayoutEffect(() => {
    layouter(window, config);
  }, []);

  return <>{children}</>;
};

export default Provider;
