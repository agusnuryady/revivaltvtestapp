import React, { memo } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WithContext } from '../context/CustomContext'

const DetailHeadlineComponent = ({newsState}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapHeadline}>
                <Text style={styles.titleText}>{newsState.detail?.title}</Text>
                <View style={styles.authorWrap}>
                    <View style={styles.profilePic}/>
                    <Text style={styles.descText}>
                        <Text>{newsState.detail?.author}</Text>
                        {' ● '}
                        <Text>{newsState.detail?.published_at}</Text>
                    </Text>
                </View>
            </View>
            <Image source={{uri:newsState.detail?.thumbnail}} style={styles.imageWrap} />
        </View>
    )
}

export default WithContext(memo(DetailHeadlineComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 16
    },
    wrapHeadline: {
        width: '100%',
        padding: 16
    },
    titleText: {
        fontFamily: fonts.bold,
        fontSize: 20,
        color: colors.text
    },
    profilePic: {
        width: 20,
        height: 20,
        borderRadius: 20/2,
        marginRight: 8,
        backgroundColor: colors.placeholder
    },
    authorWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    descText: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.placeholder
    },
    imageWrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: colors.placeholder,
        marginBottom: 16
    }
})
