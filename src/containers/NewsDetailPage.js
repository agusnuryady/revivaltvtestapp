import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AdvertiseComponent, DetailContentComponent, DetailHeadlineComponent, HeaderComponent, NewsPopularcomponent, NewsTagsComponent } from '../components'
import { colors } from '../configs'
import { WORDS } from '../constants'
import ContextProvider from '../context/CustomContext'
import styles from '../styles'
import NewsActions from '../redux/NewsRedux'

export default function NewsDetailPage({route, navigation}) {
    const item =  route?.params?.item
    const dispatch = useDispatch()
    const newsState = useSelector(state => state.news)

    useEffect(() => {
        dispatch(NewsActions.newsDetailRequest(item?.slug))
    }, [])

    const contextValues = () => {
        return {
            navigation,
            newsState
        }
    }

    return (
        <ContextProvider value={contextValues()}>
            <View style={styles.container}>
                <HeaderComponent back={true} />
                <ScrollView>
                    <DetailHeadlineComponent />
                    <AdvertiseComponent />
                    <DetailContentComponent />
                    <AdvertiseComponent />
                    <NewsTagsComponent />
                    <NewsPopularcomponent types='mini' />
                </ScrollView>
            </View>
        </ContextProvider>
    )
}
