import apisauce from 'apisauce'
import config from '../../config'

let apiUrl = config.baseURL

// ------
// STEP 1
// ------
//
// Create and configure an apisauce-based api object.
//
const apiWrapper = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: apiUrl,
    timeout: 10000
})

const getApiWrapper = () => {
    return apiWrapper.getBaseURL()
}

const changeApiWrapper = (url) => {
    return apiWrapper.setBaseURL(url)
}

// const headerWithToken = (authorization) => {
// return {
//     headers: {
//         authorization
//     }
//     }
// }

if (__DEV__) {
    const navMonitor = (response) => console.log(`API DEBUG! response =`, response)
    apiWrapper.addMonitor(navMonitor)
}

// ------
// STEP 2
// ------
//
// Define some functions that call the api.  The goal is to provide
// a thin wrapper of the api layer providing nicer feeling functions
// rather than "get", "post" and friends.
//
// I generally don't like wrapping the output at this level because
// sometimes specific actions need to be take on `403` or `401`, etc.
//
// Since we can't hide from that, we embrace it by getting out of the
// way at this level.
//

// news
const getNews = (perpage=7, page=1) => {
    return apiWrapper.get(`/api/news/?perpage=${perpage}&page=${page}`)
}

const getNewsPopular = (limit='', category='') => {
    return apiWrapper.get(`api/news/popular?limit=${limit}&category=${category}`)
}

const getNewsDetail = (slug='', page=1) => {
    return apiWrapper.get(`/api/news/detail/${slug}?page=${page}`)
}

const getCategory = () => {
    return apiWrapper.get('/api/category')
}

const getTags = () => {
    return apiWrapper.get('/api/news/tags')
}

export default {
    getApiWrapper,
    changeApiWrapper,
    getNews,
    getNewsPopular,
    getNewsDetail,
    getCategory,
    getTags
}