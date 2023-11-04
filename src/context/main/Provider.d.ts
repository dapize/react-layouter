import { IConfigUser } from 'layouter.js';

export interface IProvider {
  config?: Partial<IConfigUser>;
  children: React.ReactNode;
}
