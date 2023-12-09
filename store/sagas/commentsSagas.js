import { put, call, takeLatest } from "redux-saga/effects";
import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../constants/firebase";
import { start, success, commentsSuccess, fail } from "../slices/commentsSlice";
import {
  success as toastSuccess,
  error as toastError,
} from "../slices/toastSlice";

import { CREATE_COMMENT, GET_RECENT_COMMENTS } from "../actions/comments";

function* createComment({ data }) {
  yield put(start(CREATE_COMMENT));

  //   console.log({ data });
  const { blogId, articleId } = data;

  async function create() {
    await addDoc(
      collection(db, "blogs", blogId, "articles", articleId, "comments"),
      {
        ...data,
        status: "pending",
        createdAt: serverTimestamp(),
        modifiedAt: serverTimestamp(),
      }
    );
  }

  try {
    yield call(create);

    yield put(success());
    yield put(toastSuccess("Comment successfully submitted!"));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
    yield put(toastError(error.message));
  }
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT, createComment);
}

function* getRecentComments({ data }) {
  yield put(start(GET_RECENT_COMMENTS));

  console.log({ data });
  const { blogId, articleId } = data;

  async function get() {
    const q = query(
      collection(db, "blogs", blogId, "articles", articleId, "comments"),
      orderBy("createdAt", "desc"),
      where("status", "==", "active")
    );
    const snap = await getDocs(q);
    const comments = [];
    snap.forEach((commentDoc) => {
      comments.push({
        ...commentDoc.data(),
        id: commentDoc.id,
      });
    });

    return comments;
  }

  try {
    const comments = yield call(get);
    console.log({ comments });

    yield put(commentsSuccess(comments));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
    yield put(toastError(error.message));
  }
}

export function* watchGetRecentComments() {
  yield takeLatest(GET_RECENT_COMMENTS, getRecentComments);
}
