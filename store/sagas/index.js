import { all } from "redux-saga/effects";

import { watchSendEmail } from "./contactSagas";
import { watchCreateComment, watchGetRecentComments } from "./commentsSagas";

export default function* rootSaga() {
  yield all([watchSendEmail(), watchCreateComment(), watchGetRecentComments()]);
}
