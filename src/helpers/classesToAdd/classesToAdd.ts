import { IProcessor } from 'layouter.js';
import type { BoxProps, PolymorphicComponent } from '@components/Box';
import { TDirectiveName } from '@context/main';

export const classesToAdd = (
  rest: Omit<BoxProps<PolymorphicComponent>, 'as' | 'children'>,
  context: Record<TDirectiveName, IProcessor['build']>
) => {
  const classesLayouterToAdd = Object.keys(rest)
    .filter((propName) => {
      return context[propName as TDirectiveName];
    })
    .map((directive) => {
      const styles = context[directive as TDirectiveName](rest[directive], true);
      delete rest[directive];
      return Object.keys(styles).join(' ');
    })
    .join(' ');
  return rest.className ? rest.className + ' ' + classesLayouterToAdd : classesLayouterToAdd;
};
