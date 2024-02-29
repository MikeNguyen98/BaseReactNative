import {combineSlices} from '@reduxjs/toolkit';
import {appSlice} from './app/appSlice';
export const allReducer = combineSlices(appSlice);

export type RootState = ReturnType<typeof allReducer>;
