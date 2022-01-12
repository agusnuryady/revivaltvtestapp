import React, { memo, useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WithContext } from '../context/CustomContext'

const NewsSlideComponent = ({navigation, newsState}) => {
    const refFlatlist = useRef(null)
    const [activeIndicator, setActiveIndicator] = useState(0)

    const _scrollEnd = useCallback((e) => {
        setActiveIndicator(
            Number(
                (
                    Number(e.nativeEvent.contentOffset.x.toFixed(0)) /
                    Number((Dimensions.get('window').width).toFixed(0))
                ).toFixed(0)
            )
        );
    }, []);

    const newsItemSlide = ({item, index}) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.newsWrap}
                onPress={() => navigation.navigate('NewsDetail', { item })}
            >
                <Image source={{uri:item.thumbnail}} style={styles.newsImage} />
                <View style={styles.infoWrap}>
                    <View style={styles.labelWrap}>
                        <View style={styles.labelBox}>
                            <Text style={styles.lebelText}>{item.categories[0].term.name}</Text>
                        </View>
                    </View>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.descText}>
                        <Text>{item.author}</Text>
                        {' ● '}
                        <Text>{item.published_at}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                ref={refFlatlist}
                data={newsState.newsCategory}
                keyExtractor={(item, index) => `news slide ${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={_scrollEnd}
                renderItem={newsItemSlide}
                refreshControl={
                    <RefreshControl
                        refreshing={newsState.fetchingCategoryNews}
                    />
                }
            />
            <View style={styles.indicatorWrap}>
                {newsState.newsCategory?.map((item, index) => (
                    <View
                        key={`${index}`}
                        style={
                            index === activeIndicator 
                                ? styles.activeIndicatorDot 
                                : styles.inactiveIndicatorDot
                        }
                    />
                ))}
            </View>
        </View>
    )
}

export default WithContext(memo(NewsSlideComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        borderBottomColor: colors.placeholder,
        borderBottomWidth: 1.5
    },
    newsWrap: {
        width: Dimensions.get('window').width,
        position: 'relative'
    },
    newsImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.6,
        backgroundColor: colors.placeholder
    },
    infoWrap: {
        paddingTop: 16,
        paddingHorizontal: 16
    },
    labelWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        marginBottom: 8
    },
    labelBox: {        
        backgroundColor: colors.primary,
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 4,
        marginRight: 4
    },
    lebelText: {
        fontFamily: fonts.medium,
        fontSize: 14,
        color: colors.white
    },
    titleText: {
        fontFamily: fonts.bold,
        fontSize: 20,
        color: colors.text,
        marginBottom: 12
    },
    descText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.placeholder
    },
    indicatorWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    activeIndicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 10/2,
        backgroundColor: colors.primary,
        marginHorizontal: 8
    },
    inactiveIndicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 10/2,
        backgroundColor: colors.secondary,
        marginHorizontal: 8
    }
})
