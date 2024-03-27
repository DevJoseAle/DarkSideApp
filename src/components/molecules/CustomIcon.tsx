import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/theme/AppTheme'
import { IconBadge } from '../atoms/IconBadge'


interface Props{
    name: string,
    size: number,
    color: string,
    onpress?: any
    hasBadge?: boolean
    isPressable?: boolean
    bold?: boolean


}
export const CustomIcon = ({name, size, color, onpress, hasBadge = false, isPressable = true,bold = false}:Props) => {

  return (
    <View>
      {
          isPressable 
          ? <Pressable
          onPress={onpress}
          style={({pressed}) => [{opacity: pressed ? 0.4 : 1}, styles.container]}
             >
           <Icon name={name} size={size} color={color} />
         </Pressable>
         : <View

          style={styles.container}
             
             >
           <Icon name={name} size={size} color={color} style={  { fontWeight: bold ? 'bold' : 'normal'}} />
         </View>
      }
    
      {
        hasBadge && <IconBadge />
      }
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginHorizontal: 12,
        alignContent: 'center',
    }
})