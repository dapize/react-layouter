import React from 'react';
import { IDirectives } from '../../context';
declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
declare type PolymorphicComponentProp<C extends React.ElementType, Props = Record<string, unknown>> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
declare type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = Record<string, unknown>> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
declare type BoxComponent<C extends React.ElementType> = PolymorphicComponentPropWithRef<C>;
export declare type BoxProps = <C extends React.ElementType = 'div'>(props: BoxComponent<C> & IDirectives) => React.ReactElement | null;
declare const Box: BoxProps;
export default Box;
