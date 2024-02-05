import { ReactNode } from 'react';
import { IConfigUser, IProcessor } from 'layouter.js';

declare global {
  interface Window {
    'react-layouter': IProcessors;
  }
}

export interface IProvider {
  config?: Partial<IConfigUser>;
  children: ReactNode;
}

export type TDirectiveName =
  | 'd'
  | 'display'
  | 'c'
  | 'cols'
  | 'p'
  | 'pad'
  | 'padding'
  | 'pt'
  | 'padt'
  | 'paddingTop'
  | 'pr'
  | 'padr'
  | 'paddingRight'
  | 'pb'
  | 'padb'
  | 'paddingBottom'
  | 'pl'
  | 'padl'
  | 'paddingLeft'
  | 'px'
  | 'padx'
  | 'paddingX'
  | 'py'
  | 'pady'
  | 'paddingY'
  | 'm'
  | 'mar'
  | 'margin'
  | 'mt'
  | 'mart'
  | 'marginTop'
  | 'mr'
  | 'marr'
  | 'marginRight'
  | 'mb'
  | 'marb'
  | 'marginBottom'
  | 'ml'
  | 'marl'
  | 'marginLeft'
  | 'mx'
  | 'marx'
  | 'marginX'
  | 'my'
  | 'mary'
  | 'marginY'
  | 'fx'
  | 'flex'
  | 'mxw'
  | 'maxWidth'
  | 'mxh'
  | 'maxHeight'
  | 'miw'
  | 'minWidth'
  | 'mih'
  | 'minHeight'
  | 'w'
  | 'wdh'
  | 'width'
  | 'h'
  | 'hgt'
  | 'height'
  | 'pos'
  | 'position'
  | 't'
  | 'top'
  | 'r'
  | 'right'
  | 'b'
  | 'bottom'
  | 'l'
  | 'left';

export type IProcessors = Record<TDirectiveName, IProcessor['build']>;

export interface IDirectives {
  d?: string;
  display?: string;
  c?: string;
  cols?: string;
  p?: string | number;
  pad?: string | number;
  padding?: string | number;
  pt?: string | number;
  padt?: string | number;
  paddingTop?: string | number;
  pr?: string | number;
  padr?: string | number;
  paddingRight?: string | number;
  pb?: string | number;
  padb?: string | number;
  paddingBottom?: string | number;
  pl?: string | number;
  padl?: string | number;
  paddingLeft?: string | number;
  px?: string | number;
  padx?: string | number;
  paddingX?: string | number;
  py?: string | number;
  pady?: string | number;
  paddingY?: string | number;
  m?: string | number;
  mar?: string | number;
  margin?: string | number;
  mt?: string | number;
  mart?: string | number;
  marginTop?: string | number;
  mr?: string | number;
  marr?: string | number;
  marginRight?: string | number;
  mb?: string | number;
  marb?: string | number;
  marginBottom?: string | number;
  ml?: string | number;
  marl?: string | number;
  marginLeft?: string | number;
  mx?: string | number;
  marx?: string | number;
  marginX?: string | number;
  my?: string | number;
  mary?: string | number;
  marginY?: string | number;
  fx?: string;
  flex?: string;
  mxw?: string | number;
  maxWidth?: string | number;
  mxh?: string | number;
  maxHeight?: string | number;
  miw?: string | number;
  minWidth?: string | number;
  mih?: string | number;
  minHeight?: string | number;
  w?: string | number;
  wdh?: string | number;
  width?: string | number;
  h?: string | number | number;
  hgt?: string | number;
  height?: string | number;
  pos?: string;
  position?: string;
  t?: string | number;
  top?: string | number;
  r?: string | number;
  right?: string | number;
  b?: string | number;
  bottom?: string | number;
  l?: string | number;
  left?: string | number;
}
