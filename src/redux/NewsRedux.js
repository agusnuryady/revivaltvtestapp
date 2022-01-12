import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    categoryRequest: ['data'],
    categorySuccess: ['data'],
    categoryFailure: ['err'],
    newsCategoryRequest: ['limit','category'],
    newsCategorySuccess: ['data'],
    newsCategoryFailure: ['err'],
    newsTagsRequest: ['data'],
    newsTagsSuccess: ['data'],
    newsTagsFailure: ['err'],
    newsListRequest: ['perpage','page'],
    newsListSuccess: ['data'],
    newsListFailure: ['err'],
    newsPopularRequest: ['data'],
    newsPopularSuccess: ['data'],
    newsPopularFailure: ['err'],
    newsDetailRequest: ['slug','page'],
    newsDetailSuccess: ['data'],
    newsDetailFailure: ['err']
})

export const NewsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    fetching: false,
    fetchingCategoryNews: false,
    fetchingListNews: false,
    fetchingDetail: false,
    success: false,
    successCategoryNews: false,
    successListNews: false,
    successDetail: false,
    category: null,
    newsCategory: null,
    tags: null,
    list: null,
    popular: null,
    detail: null,
    err: null
}

/* ------------- Reducers ------------- */

export const request = (state) => {
    return {
        ...state,
        fetching: true,
        success: false,
        err: null,
    }
}

export const requestNewsCategory = (state) => {
    return {
        ...state,
        fetchingCategoryNews: true,
        successCategoryNews: false,
        err: null,
    }
}

export const requestNewsList = (state) => {
    return {
        ...state,
        fetchingListNews: true,
        successListNews: false,
        err: null,
    }
}

export const requestDetail = (state) => {
    return {
        ...state,
        fetchingDetail: true,
        successDetail: false,
        err: null,
    }
}

export const failure = (state, { err }) => {
    return {
        ...state,
        fetching: false,
        fetchingCategoryNews: false,
        fetchingListNews: false,
        success: false,
        err
    }
}

export const successCategory = (state, { data }) => {
    return {
        ...state,
        fetching: false,
        success: true,
        err: null,
        category: data
    }
}

export const successNewsCategory = (state, { data }) => {
    return {
        ...state,
        fetchingCategoryNews: false,
        successCategoryNews: true,
        err: null,
        newsCategory: data
    }
}

export const successTags = (state, { data }) => {
    return {
        ...state,
        fetching: false,
        success: true,
        err: null,
        tags: data
    }
}

export const successList = (state, { data }) => {
    return {
        ...state,
        fetchingListNews: false,
        successListNews: true,
        err: null,
        list: data
    }
}

export const successPopular = (state, { data }) => {
    return {
        ...state,
        fetching: false,
        success: true,
        err: null,
        popular: data
    }
}

export const successDetail = (state, { data }) => {
    return {
        ...state,
        fetchingDetail: false,
        successDetail: true,
        err: null,
        detail: data
    }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CATEGORY_REQUEST]: request,
    [Types.CATEGORY_SUCCESS]: successCategory,
    [Types.CATEGORY_FAILURE]: failure,
    [Types.NEWS_CATEGORY_REQUEST]: requestNewsCategory,
    [Types.NEWS_CATEGORY_SUCCESS]: successNewsCategory,
    [Types.NEWS_CATEGORY_FAILURE]: failure,
    [Types.NEWS_TAGS_REQUEST]: request,
    [Types.NEWS_TAGS_SUCCESS]: successTags,
    [Types.NEWS_TAGS_FAILURE]: failure,
    [Types.NEWS_LIST_REQUEST]: requestNewsList,
    [Types.NEWS_LIST_SUCCESS]: successList,
    [Types.NEWS_LIST_FAILURE]: failure,
    [Types.NEWS_POPULAR_REQUEST]: request,
    [Types.NEWS_POPULAR_SUCCESS]: successPopular,
    [Types.NEWS_POPULAR_FAILURE]: failure,
    [Types.NEWS_DETAIL_REQUEST]: requestDetail,
    [Types.NEWS_DETAIL_SUCCESS]: successDetail,
    [Types.NEWS_DETAIL_FAILURE]: failure
})