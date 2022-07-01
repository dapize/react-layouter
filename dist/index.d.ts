import React, { FC } from 'react';
import { IConfigUser } from 'layouter.js';

declare type TDirectiveName = 'd' | 'display' | 'c' | 'cols' | 'p' | 'pad' | 'padding' | 'pt' | 'padt' | 'paddingTop' | 'pr' | 'padr' | 'paddingRight' | 'pb' | 'padb' | 'paddingBottom' | 'pl' | 'padl' | 'paddingLeft' | 'px' | 'padx' | 'paddingX' | 'py' | 'pady' | 'paddingY' | 'm' | 'mar' | 'margin' | 'mt' | 'mart' | 'marginTop' | 'mr' | 'marr' | 'marginRight' | 'mb' | 'marb' | 'marginBottom' | 'ml' | 'marl' | 'marginLeft' | 'mx' | 'marx' | 'marginX' | 'my' | 'mary' | 'marginY' | 'fx' | 'flex' | 'mxw' | 'maxWidth' | 'mxh' | 'maxHeight' | 'miw' | 'minWidth' | 'mih' | 'minHeight' | 'w' | 'wdh' | 'width' | 'h' | 'hgt' | 'height' | 'pos' | 'position' | 't' | 'top' | 'r' | 'right' | 'b' | 'bottom' | 'l' | 'left';
interface LayouterDirectives {
    d?: string;
    display?: string;
    c?: string;
    cols?: string;
    p?: string;
    pad?: string;
    padding?: string;
    pt?: string;
    padt?: string;
    paddingTop?: string;
    pr?: string;
    padr?: string;
    paddingRight?: string;
    pb?: string;
    padb?: string;
    paddingBottom?: string;
    pl?: string;
    padl?: string;
    paddingLeft?: string;
    px?: string;
    padx?: string;
    paddingX?: string;
    py?: string;
    pady?: string;
    paddingY?: string;
    m?: string;
    mar?: string;
    margin?: string;
    mt?: string;
    mart?: string;
    marginTop?: string;
    mr?: string;
    marr?: string;
    marginRight?: string;
    mb?: string;
    marb?: string;
    marginBottom?: string;
    ml?: string;
    marl?: string;
    marginLeft?: string;
    mx?: string;
    marx?: string;
    marginX?: string;
    my?: string;
    mary?: string;
    marginY?: string;
    fx?: string;
    flex?: string;
    mxw?: string;
    maxWidth?: string;
    mxh?: string;
    maxHeight?: string;
    miw?: string;
    minWidth?: string;
    mih?: string;
    minHeight?: string;
    w?: string;
    wdh?: string;
    width?: string;
    h?: string;
    hgt?: string;
    height?: string;
    pos?: string;
    position?: string;
    t?: string;
    top?: string;
    r?: string;
    right?: string;
    b?: string;
    bottom?: string;
    l?: string;
    left?: string;
}
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
declare type BoxProps = <C extends React.ElementType = 'div'>(props: BoxComponent<C> & LayouterDirectives) => React.ReactElement | null;
declare const Box: BoxProps;

interface IProvider {
    config?: Partial<IConfigUser>;
    children: React.ReactNode;
}
declare const Provider: FC<IProvider>;

export { Box, BoxProps, IProvider, Provider, TDirectiveName };
