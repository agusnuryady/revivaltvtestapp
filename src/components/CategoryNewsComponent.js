import React, { memo } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../configs'
import { WithContext } from '../context/CustomContext'

const CategoryNewsComponent = ({newsState, selectedCategory, categoryHandle}) => {

    const categoryItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.5}
                style={styles.catButton}
                onPress={() => categoryHandle(index, item.slug)}
            >
                <Text style={styles.catText}>{item.name}</Text>
                <View style={[styles.catUnderLine, selectedCategory === index && { backgroundColor: colors.text}]}/>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={newsState.category}
                keyExtractor={(item, index) => `category item ${index}`}
                renderItem={categoryItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default WithContext(memo(CategoryNewsComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        borderWidth: 1,
        borderColor: colors.placeholder
    },
    catButton: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    catText: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: colors.text
    },
    catUnderLine: {
        marginTop: 4,
        width: 20,
        height: 1.5,
    }
})
