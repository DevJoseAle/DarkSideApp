import { Pressable, StyleSheet, Text } from "react-native"
import { colors } from "../../config/theme/AppTheme"

interface Props {
    title: string,
    fn: () => void
}

export const SearchButton = ({title, fn}:Props) => {
  return (
    <Pressable 
          onPress={fn}
           style={({pressed}) => [{opacity: pressed ? 0.7 : 1},styles.toSearchButton]}
          >
          <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 20}}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
 
    toSearchButton: {
      width: '90%',
      height: 50,
      marginHorizontal:10,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  }
})