import React, { FC } from 'react';
import { IConfigUser } from 'layouter.js';
export interface IProvider {
    config?: Partial<IConfigUser>;
    children: React.ReactNode;
}
declare const Provider: FC<IProvider>;
export default Provider;
