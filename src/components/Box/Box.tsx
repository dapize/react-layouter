import React, { ElementType, forwardRef } from 'react';
import type { BoxProps, PolymorphicComponent, PolymorphicRef } from './Box.d';
import { classesToAdd } from '@helpers/classesToAdd';

export const Box: PolymorphicComponent = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: PolymorphicRef<T>) => {
    const { as, children, ...rest } = props;
    const Component = as || 'div';
    const restProps = { ...rest };
    let classes = restProps.className ? restProps.className + ' ' : '';
    const layouterClasses = classesToAdd(restProps);
    if (layouterClasses) classes += layouterClasses;

    return (
      <Component ref={ref} {...restProps} className={classes ? classes : undefined}>
        {children}
      </Component>
    );
  }
);
