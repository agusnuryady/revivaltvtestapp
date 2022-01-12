import React, { memo } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import RenderHtml from 'react-native-render-html'

import { colors, fonts } from '../configs'
import { WORDS } from '../constants'
import { WithContext } from '../context/CustomContext'

const DetailContentComponent = ({newsState}) => {
    return (
        <View style={styles.container}>
            {newsState.detail !== null && 
                <RenderHtml
                    source={{html:newsState.detail?.content}}
                    contentWidth={Dimensions.get('window').width}
                    tagsStyles={{
                        body: {
                            color: colors.text,
                            fontSize: 16
                        }
                    }}
                />
            }
            <View style={styles.wrapTags}>
                <Text style={styles.subTitle}>{WORDS.TAGS}</Text>
                <View style={styles.wrapTagContent}>
                    {newsState.detail !== null && Object.values(newsState.detail?.tags).map((item,index) => (
                        <View key={`tags item ${index}`} style={styles.tagsItem}>
                            <Text style={styles.tagsText}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default WithContext(memo(DetailContentComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16
    },
    wrapTags: {
        width: '100%',
        marginVertical: 16
    },
    subTitle: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: colors.text,
        paddingVertical: 8
    },
    wrapTagContent: {
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagsItem: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colors.background,
        marginRight: 16,
        marginVertical: 8
    },
    tagsText: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.placeholder
    }
})
