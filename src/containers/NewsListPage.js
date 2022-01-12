import React, { useCallback, useEffect, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles'
import { AdvertiseComponent, CategoryNewsComponent, HeaderComponent, NewsNewestComponent, NewsPopularcomponent, NewsSlideComponent, NewsTagsComponent } from '../components'
import ContextProvider from '../context/CustomContext'
import NewsActions from '../redux/NewsRedux'

export default function NewsListPage({ navigation }) {
    const dispatch = useDispatch()
    const newsState = useSelector(state => state.news)
    const [selectedCategory, setSelectedCategory] = useState(0)
    // const [transactionData, setTransactionData] = useState(transactionState.data)
    // const [sortSelected, setSortSelected] = useState(0)
    // const [searchText, setSearchText] = useState('')

    /* ------------- Get data when first time render ------------- */
    useEffect(() => {
        getAllData()
    }, [])
    /* ------------- End ------------- */

    const getAllData = useCallback(
        () => {
            dispatch(NewsActions.categoryRequest())
            dispatch(NewsActions.newsCategoryRequest(3, ''))
            dispatch(NewsActions.newsTagsRequest())
            dispatch(NewsActions.newsPopularRequest())
            dispatch(NewsActions.newsListRequest(7, 1))
            setSelectedCategory(0)
        },
        [newsState],
    )

    const categoryHandle = useCallback(
        (index, category) => {
            setSelectedCategory(index)
            dispatch(NewsActions.newsCategoryRequest(3, category))
        },
        [newsState.category],
    )

    const listNewstHandle = useCallback(
        (page) => {
            dispatch(NewsActions.newsListRequest(7, page))
        },
        [newsState.list],
    )

    const contextValues = () => {
        return {
            navigation,
            newsState,
            selectedCategory,
            categoryHandle,
            listNewstHandle
        }
    }

    return (
        <ContextProvider value={contextValues()}>
            <View style={styles.container}>
                <HeaderComponent />
                <CategoryNewsComponent />
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={newsState.fetching}
                        onRefresh={getAllData}
                    />
                }>
                    <NewsSlideComponent />
                    <AdvertiseComponent />
                    <NewsTagsComponent />
                    <NewsPopularcomponent />
                    <AdvertiseComponent />
                    <NewsNewestComponent />
                    <AdvertiseComponent type='vertical' />
                </ScrollView>
            </View>
        </ContextProvider>
    )
}
