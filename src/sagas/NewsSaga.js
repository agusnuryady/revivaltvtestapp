import { call, put, takeLatest, takeLeading } from 'redux-saga/effects'

import NewsActions, { NewsTypes } from '../redux/NewsRedux';

export function * fetchCategory (api) {
    yield takeLeading(NewsTypes.CATEGORY_REQUEST, fetchCategoryAPI, api)
}

export function * fetchCategoryAPI (api) {
    try {
        const response = yield call(api.getCategory)
        if (response.ok) {
            const data = [{slug: '', name: 'Semua'},...response.data.data]
            yield put(NewsActions.categorySuccess(data))
        } else {
            yield put(NewsActions.categoryFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.categoryFailure(error))
    }
}

export function * fetchNewsCategory (api) {
    yield takeLatest(NewsTypes.NEWS_CATEGORY_REQUEST, fetchNewsCategoryAPI, api)
}

export function * fetchNewsCategoryAPI (api , { limit, category }) {
    try {
        const response = yield call(api.getNewsPopular, limit, category)
        if (response.ok) {
            yield put(NewsActions.newsCategorySuccess(response.data.data))
        } else {
            yield put(NewsActions.newsCategoryFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.newsCategoryFailure(error))
    }
}

export function * fetchNewsTags (api) {
    yield takeLeading(NewsTypes.NEWS_TAGS_REQUEST, fetchNewsTagsAPI, api)
}

export function * fetchNewsTagsAPI (api) {
    try {
        const response = yield call(api.getTags)
        if (response.ok) {
            yield put(NewsActions.newsTagsSuccess(response.data.data))
        } else {
            yield put(NewsActions.newsTagsFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.newsTagsFailure(error))
    }
}

export function * fetchNewsPopular (api) {
    yield takeLeading(NewsTypes.NEWS_POPULAR_REQUEST, fetchNewsPopularAPI, api)
}

export function * fetchNewsPopularAPI (api) {
    try {
        const response = yield call(api.getNewsPopular)
        if (response.ok) {
            yield put(NewsActions.newsPopularSuccess(response.data.data))
        } else {
            yield put(NewsActions.newsPopularFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.newsPopularFailure(error))
    }
}

export function * fetchNewsList (api) {
    yield takeLeading(NewsTypes.NEWS_LIST_REQUEST, fetchNewsListAPI, api)
}

export function * fetchNewsListAPI (api , { perpage, page }) {
    try {
        const response = yield call(api.getNews, perpage, page)
        if (response.ok) {
            yield put(NewsActions.newsListSuccess(response.data))
        } else {
            yield put(NewsActions.newsListFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.newsListFailure(error))
    }
}

export function * fetchNewsDetail (api) {
    yield takeLeading(NewsTypes.NEWS_DETAIL_REQUEST, fetchNewsDetailAPI, api)
}

export function * fetchNewsDetailAPI (api , { slug, page }) {
    try {
        const response = yield call(api.getNewsDetail, slug, page)
        if (response.ok) {
            yield put(NewsActions.newsDetailSuccess(response.data.data))
        } else {
            yield put(NewsActions.newsDetailFailure(response))
        }
    } catch (error) {
        yield put(NewsActions.newsDetailFailure(error))
    }
}