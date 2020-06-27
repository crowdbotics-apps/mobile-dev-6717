import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6964Saga from '../features/EmailAuth6964/redux/sagas';
import EmailAuth6963Saga from '../features/EmailAuth6963/redux/sagas';
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
EmailAuth6964Saga,
EmailAuth6963Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}