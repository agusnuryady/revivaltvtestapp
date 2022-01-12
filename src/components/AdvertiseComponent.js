import React, { memo } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { WithContext } from '../context/CustomContext'

const AdvertiseComponent = ({type='horizontal'}) => {
    return (
        <>
            {type === 'horizontal' ? (
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/images/advertise.webp')}
                        style={styles.advertiseHorizontalImage} 
                        resizeMode='contain'
                    />
                </View>
            ):(
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/images/advertiseSquare.webp')}
                        style={styles.advertiseVerticalImage} 
                        resizeMode='contain'
                    />
                </View>
            )}
        </>
    )
}

export default WithContext(memo(AdvertiseComponent))

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        alignItems: 'center'
    },
    advertiseHorizontalImage: {
        width: '100%',
        height: Dimensions.get('window').width * 0.15,
    },
    advertiseVerticalImage: {
        width: '90%',
        height: Dimensions.get('window').width * 0.65,
    }
})
