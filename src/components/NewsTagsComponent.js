import React, { memo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WORDS } from '../constants'
import { WithContext } from '../context/CustomContext'

const NewsTagsComponent = ({newsState}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{WORDS.TAGS_POUPULER}</Text>
            <FlatList
                data={newsState.tags}
                keyExtractor={(item, index) => `tags item ${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.tagsWrap}>
                            <Text style={styles.tagsText}>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default WithContext(memo(NewsTagsComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 8
    },
    titleText: {
        fontFamily: fonts.bold,
        fontSize: 20,
        color: colors.text,
        paddingHorizontal: 8
    },
    tagsWrap: {
        marginHorizontal: 8,
        marginVertical: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colors.placeholder
    },
    tagsText: {
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.textSecondary
    }
})
