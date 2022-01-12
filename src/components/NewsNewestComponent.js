import React, { memo } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WORDS } from '../constants'
import { WithContext } from '../context/CustomContext'

const NewsNewestComponent = ({navigation, newsState, listNewstHandle}) => {
    const newestItem = (item, index) => {
        if (index === 0) {
            return (
                <TouchableOpacity 
                    key={`newest item ${index}`} 
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
        } else {
            return (
                <TouchableOpacity 
                    key={`newest item ${index}`} 
                    activeOpacity={1} 
                    style={styles.newsHorizontalWrap}
                    onPress={() => navigation.navigate('NewsDetail', { item })}
                >
                    <Image source={{uri:item.thumbnail}} style={styles.newsHorizontalImage} />
                    <View style={styles.infoHorizontalWrap}>
                        <View style={styles.labelWrap}>
                            <View style={styles.labelBox}>
                                <Text style={styles.lebelText}>{item.categories[0].term.name}</Text>
                            </View>
                        </View>
                        <Text style={styles.subTitle}>{item.title}</Text>
                        <Text style={styles.descText}>
                            <Text>{item.author}</Text>
                            {' ● '}
                            <Text>{item.published_at}</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>{WORDS.BERITA_TERBARU}</Text>
            {newsState.list?.data?.map(newestItem)}
            <View style={styles.wrapNav}>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    disabled={newsState.list?.currentPage === '1' || newsState.fetchingListNews} 
                    style={newsState.list?.currentPage !== '1' ? styles.activeBtn : styles.inactiveBtn}
                    onPress={() => listNewstHandle(parseInt(newsState.list?.currentPage)-1)}
                >
                    <Text style={newsState.list?.currentPage !== '1' ? styles.activeTitle : styles.inactiveTitle}>
                        {WORDS.SEBELUMNYA}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    disabled={newsState.list?.isLastPage || newsState.fetchingListNews}
                    style={!newsState.list?.isLastPage ? styles.activeBtn :styles.inactiveBtn}
                    onPress={() => listNewstHandle(parseInt(newsState.list?.currentPage)+1)}
                >
                    <Text style={!newsState.list?.isLastPage ? styles.activeTitle : styles.inactiveTitle}>
                        {WORDS.SELANJUTNYA}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WithContext(memo(NewsNewestComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16
    },
    bigText: {
        fontFamily: fonts.bold,
        fontSize: 20,
        color: colors.text,
        marginVertical: 8
    },
    newsWrap: {
        width: '100%',
        position: 'relative',
        paddingVertical: 8
    },
    newsImage: {
        width: '100%',
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: colors.placeholder,
        borderRadius: 5
    },
    infoWrap: {
        paddingTop: 16,
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
        fontSize: 18,
        color: colors.text,
        marginBottom: 12
    },
    subTitle: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: colors.text,
        marginBottom: 12
    },
    descText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.placeholder
    },
    newsHorizontalWrap: {
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        paddingVertical: 8
    },
    newsHorizontalImage: {
        width: 100,
        height: 60,
        backgroundColor: colors.placeholder,
        borderRadius: 5
    },
    infoHorizontalWrap: {
        flex: 1,
        paddingHorizontal: 16
    },
    wrapNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 16
    },
    activeBtn: {
        width: Dimensions.get('window').width * 0.42,
        alignItems: 'center',
        padding: 16,
        borderRadius: 7,
        backgroundColor: colors.primary
    },
    inactiveBtn: {
        width: Dimensions.get('window').width * 0.42,
        alignItems: 'center',
        padding: 16,
        borderRadius: 7,
        backgroundColor: colors.background
    },
    activeTitle: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.white
    },
    inactiveTitle: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.textSecondary
    }
})
