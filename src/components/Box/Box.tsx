import { IProcessor } from 'layouter.js';
import React, { useContext } from 'react';
import LayouterContext, { IDirectives, TDirectiveName } from '../../context';

type AsProp<C extends React.ElementType> = { as?: C };
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];
type BoxComponent<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C>;

export type BoxProps = <C extends React.ElementType = 'div'>(
  props: BoxComponent<C> & IDirectives
) => React.ReactElement | null;

const Box: BoxProps = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, ...rest }: BoxComponent<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const layouter = useContext(LayouterContext) as Record<
      TDirectiveName,
      IProcessor['build']
    >;
    const Component = as || 'div';
    const restProps = { ...rest };
    const classesLayouterToAdd = Object.keys(restProps)
      .filter((propName) => {
        return layouter[propName as TDirectiveName];
      })
      .map((directive) => {
        const styles = layouter[directive as TDirectiveName](
          restProps[directive],
          true
        );
        delete restProps[directive];
        return Object.keys(styles).join(' ');
      })
      .join(' ');
    const classesToAdd = rest.className
      ? rest.className + ' ' + classesLayouterToAdd
      : classesLayouterToAdd;

    return (
      <Component
        ref={ref}
        {...restProps}
        className={classesToAdd ? classesToAdd : undefined}
      >
        {children}
      </Component>
    );
  }
);

export default Box;
