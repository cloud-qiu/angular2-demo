
import { DropDownItem } from '../../app/drop-down/drop-down.model';
import { DATE_VALUE_CHANGE, ACCOUNT_VALUE_CHANGE } from '../actions/drop-down.actions'

export interface DropDownState {
  dropDownItems: DropDownItem[]
}

export const initState: DropDownState = {
  dropDownItems: []
}

export default function reducer(
  state = initState, action: any
): DropDownState {
  switch (action.type) {
    case DATE_VALUE_CHANGE:
      return {
        dropDownItems: state.dropDownItems.map((item, index) => {
          return index === action.payload.id
            ? Object.assign({}, item, { value: action.payload.newValue })
            : item;
        })
      }
    case ACCOUNT_VALUE_CHANGE:
      return {
        dropDownItems: state.dropDownItems.map((item, index) => {
          return index === action.payload.id
            ? Object.assign({}, item, { value: action.payload.newValue })
            : item;
        })
      }
    default:
      return state;
  }
}
