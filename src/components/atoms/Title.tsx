import React from 'react'
import { Platform, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props {
    title: string, 
    color?: string,
    size?: number,
    hasInsets?: boolean,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    center?: boolean
}

export const Title = ({
  title, 
  color, 
  size = 30, 
  hasInsets = false, 
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  center=false
  }:Props) => {

  return (
    <View
    style={{
        // marginTop: hasInsets && platform === 'ios' ? insets : marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        

    }}
    >
      <Text style={{
        ...globalStyles.title, 
        color: color ? color : colors.text, 
        fontSize: size,
        textAlign: center ? 'center' : 'left',
        }}>{title}</Text>
    </View>
  )
}
