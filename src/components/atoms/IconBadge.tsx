import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme/AppTheme'

//TODO Cambiar el número y colocarle el lenght de favoritos
export const IconBadge = () => {

  return (
    <View style={styles.badge}>
        <Text style={styles.text}>99</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    badge:{

        position:'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.primary,
        right: 0,
        top: -8,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.text, 
        fontWeight: 'bold', 
        fontSize:10,
        alignSelf: 'center',
    }
})