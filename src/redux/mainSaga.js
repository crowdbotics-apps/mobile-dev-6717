import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6969Saga from '../features/EmailAuth6969/redux/sagas';
import EmailAuth6964Saga from '../features/EmailAuth6964/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6969Saga,
EmailAuth6964Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}