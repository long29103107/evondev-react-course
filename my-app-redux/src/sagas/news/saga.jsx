import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import fetchNews from "./handlers";

export default function* newsSaga() {
    yield takeLatest(getNews.type, fetchNews);
}