import { FC } from 'react';
import layouter, { TDirectiveName } from 'layouter.js';
import { IProvider, TDirectiveName as TNewDirectiveName, IProcessors } from './Provider.d';

export const Provider: FC<IProvider> = ({ config = {}, children }) => {
  const instance = layouter(window, {
    ...config,
    searchOnInit: false,
    observer: false
  });

  const processors: Partial<IProcessors> = {};
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

  window['react-layouter'] = processors as IProcessors;

  return children;
};

export const LayouterProvider = Provider;
