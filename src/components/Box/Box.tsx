import React, { ElementType, forwardRef, useContext } from 'react';
import { IProcessor } from 'layouter.js';
import { classesToAdd } from '@helpers/classesToAdd';
import { LayouterContext, TDirectiveName } from '@context/main';
import type { BoxProps, PolymorphicComponent, PolymorphicRef } from './Box.d';

export const Box: PolymorphicComponent = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: PolymorphicRef<T>) => {
    const { as, children, ...rest } = props;
    const Component = as || 'div';
    const context = useContext(LayouterContext) as Record<TDirectiveName, IProcessor['build']>;
    const restProps = { ...rest };
    const classes = classesToAdd(restProps, context);

    return (
      <Component ref={ref} {...restProps} className={classes ? classes : undefined}>
        {children}
      </Component>
    );
  }
);
