import React, { FC } from 'react';
import layouter, { IProcessor, TDirectiveName } from 'layouter.js';
import { LayouterContext } from './Context';
import { TDirectiveName as TNewDirectiveName } from './Context.d';
import { IProvider } from './Provider.d';

export const LayouterProvider: FC<IProvider> = ({ config = {}, children }) => {
  const instance = layouter(window, {
    ...config,
    searchOnInit: false,
    observer: false
  });

  const processors: Partial<Record<TNewDirectiveName, IProcessor['build']>> = {};
  Object.keys(instance.processors).forEach((directive) => {
    let newDirectiveName: TNewDirectiveName;
    if (directive.includes('-')) {
      const directiveSplited = directive.split('-');
      newDirectiveName = (directiveSplited[0] +
        directiveSplited[1].substring(0, 1).toUpperCase() +
        directiveSplited[1].substring(1)) as TNewDirectiveName;
    } else {
      newDirectiveName = directive as TNewDirectiveName;
    }
    processors[newDirectiveName] = instance.processors[directive as TDirectiveName].build;
  });

  return (
    <LayouterContext.Provider value={processors as Record<TNewDirectiveName, IProcessor['build']>}>
      {children}
    </LayouterContext.Provider>
  );
};
