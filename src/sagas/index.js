import { all, fork } from 'redux-saga/effects';
import api from '../services/Api'

/* ------------- Sagas ------------- */
import { fetchCategory, fetchNewsCategory, fetchNewsDetail, fetchNewsList, fetchNewsPopular, fetchNewsTags } from './NewsSaga'

function * NewsSagas () {
    yield all([
        fork(fetchCategory, api),
        fork(fetchNewsCategory, api),
        fork(fetchNewsTags, api),
        fork(fetchNewsPopular, api),
        fork(fetchNewsList, api),
        fork(fetchNewsDetail, api)
    ])
}

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
    yield all([
        fork(NewsSagas)
    ])
}