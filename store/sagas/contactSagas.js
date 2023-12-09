import { put, call, takeLatest } from "redux-saga/effects";

import { SEND_EMAIL } from "../actions/contact";

import { start, success, fail, reset } from "../slices/contactSlice";

function* sendEmail({ data }) {
  yield put(start());
  // console.log({ data });

  function send() {
    // console.log("sent");

    return fetch("/api/sendmail", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((resp) => {
        // console.log({ code: resp.status, status: resp.statusText });
        if (resp.status === 200) {
          return resp.json();
        } else {
          throw new Error("Data not submitted! Please try again later!");
        }
      })
      .then((res) => {
        console.log({ res });
        return res;
      });
  }

  try {
    const response = yield call(send);
    // console.log({ response });

    yield put(success());
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

export function* watchSendEmail() {
  yield takeLatest(SEND_EMAIL, sendEmail);
}
