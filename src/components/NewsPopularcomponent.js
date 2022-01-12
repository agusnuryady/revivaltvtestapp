import React, { memo } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WORDS } from '../constants'
import { WithContext } from '../context/CustomContext'

const NewsPopularcomponent = ({navigation, newsState, types='normal'}) => {

    const popularItem = (item, index) => {
        if (index === 0) {
            return (
                <TouchableOpacity 
                    key={`popular item ${index}`} 
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
                    key={`popular item ${index}`} 
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

    const minniPopularItem = (item, index) => {
        return (
            <TouchableOpacity 
                key={`popular item ${index}`} 
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

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>{WORDS.BERITA_POPULER}</Text>
            {types === 'normal' ? newsState.popular?.map(popularItem) : newsState.popular?.slice(0, 3).map(minniPopularItem)}
        </View>
    )
}

export default WithContext(memo(NewsPopularcomponent))

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
})
