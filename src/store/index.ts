/**
 * @description store 管理库
 */
import { default as dropDownReducer, DropDownState } from './reducers/drop-down.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    'dropDownState': DropDownState
}

export const STORE_KEY = {
    TEST_STATE: 'todoState'
};

export const reducers: ActionReducerMap<any> = {
    'dropDownState': dropDownReducer,
};