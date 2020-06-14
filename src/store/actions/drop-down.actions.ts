import { Action } from '@ngrx/store';
import { DropDownItem } from '../../app/drop-down/drop-down.model';

export const DATE_VALUE_CHANGE = 'date value change';
export const ACCOUNT_VALUE_CHANGE = 'account value change';

export class DateValueChangeAction implements Action {
    readonly type = DATE_VALUE_CHANGE;
    constructor(public payload: DropDownItem) {}
}

export class AccountValueChangeAction implements Action {
    readonly type = ACCOUNT_VALUE_CHANGE;
    constructor(public payload: DropDownItem) {}
}

export type selectValueChangeActions =
    | DateValueChangeAction
    | AccountValueChangeAction;