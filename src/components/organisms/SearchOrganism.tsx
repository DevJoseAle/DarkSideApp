import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Title } from '../atoms/Title'
import { SearchInput } from '../molecules/SearchInput'
import { colors } from '../../config/theme/AppTheme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigator/Navigation'

export const SearchOrganism = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const appTitle = `
    ¡Busca tu 
    Película Favorita!
    `;
  return (
    <>
        <Title 
        title={appTitle} 
        marginTop={-20}
        marginBottom={-10} />

        <Pressable 
          onPress={()=> navigation.navigate('Search')}
          style={({pressed}) => [{opacity: pressed ? 0.7 : 1},styles.toSearchButton,]}>
          <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 20}}>¡Presiona para buscar!</Text>
        </Pressable>
        
    </>
  )
}

const styles = StyleSheet.create({
  toSearchButton: {
    width: '90%',
    height: 50,
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

 