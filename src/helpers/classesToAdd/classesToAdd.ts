import { BoxProps } from '@components/Box';
import { IProcessors, TDirectiveName } from '@components/Provider';
import { ElementType } from 'react';

export const classesToAdd = (restProps: Omit<BoxProps<ElementType>, 'children' | 'as'>) => {
  const processors = window['react-layouter'] as IProcessors;
  return Object.keys(restProps)
    .filter((propName) => processors[propName as TDirectiveName])
    .map((directive) => {
      const styles = processors[directive as TDirectiveName](
        restProps[directive].toString().replaceAll('px', ''),
        true
      );
      delete restProps[directive];
      return Object.keys(styles).join(' ');
    })
    .join(' ');
};
