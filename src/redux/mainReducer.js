import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6969Reducer from '../features/EmailAuth6969/redux/reducers';
import EmailAuth6964Reducer from '../features/EmailAuth6964/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6969: EmailAuth6969Reducer,
EmailAuth6964: EmailAuth6964Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});