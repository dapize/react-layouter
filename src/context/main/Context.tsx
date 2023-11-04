import { createContext } from 'react';
import { IProcessor } from 'layouter.js';
import type { TDirectiveName } from './Context.d';

export const LayouterContext = createContext<null | Record<TDirectiveName, IProcessor['build']>>(null);
