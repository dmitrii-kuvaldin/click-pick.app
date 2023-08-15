import { all } from 'redux-saga/effects';
import { sitterSaga } from './sitter.saga';
import workersSaga from './workers.saga';

export default function* rootSaga() {
  yield all([
    workersSaga(),
    sitterSaga(),
  ])
}
