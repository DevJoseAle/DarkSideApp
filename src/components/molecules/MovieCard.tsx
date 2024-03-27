import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigator/Navigation'
import { FilmDetail } from '../../interfaces/filmInterfaces'
import { Title } from '../atoms/Title'
import { posterData } from '../../api/posterData'


interface Props{
    movie: FilmDetail
    index: number
    id:number
}

export const MovieCard = ({movie, index,id}:Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  const filmId = index+1

  return (
    <Pressable
     onPress={() => (navigation.navigate('Movie', {episode_id: filmId.toString(), previousScreen: 'inicio'}))}
     style={styles.cardContainer}>
      <Image style={styles.image} source={{uri: posterData[movie.episode_id]}} />
      <View style={{position: 'absolute', bottom: 10, backgroundColor: '#0D0C0CC6', width: '100%'}}>
        <Title title={`${movie.title}`} center size={40} color={'white'}/>
      </View>
    
        
        
    </Pressable>
  )

}

const styles = StyleSheet.create({
    cardContainer: {
      width: 300,
      height: 420,
      marginHorizontal: 7,
      backgroundColor: '#0D0C0CC6',
      borderRadius: 10,
      borderColor: "#0080FF7B",
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      
    },
    image:{
        flex:1,
        width: '100%',
        height: '100%',
        borderRadius:10
    },
    text:{
        color:'white',
        fontSize:20
    }
  })
