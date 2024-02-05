import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { IDirectives } from '@components/Provider';

export type BoxProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T;
  children?: ReactNode;
};

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponent = <T extends ElementType = 'div'>(
  props: BoxProps<T> & IDirectives
) => ReactNode | null;
