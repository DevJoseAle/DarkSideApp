import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Title } from '../atoms/Title';
import { MovieCard } from '../molecules/MovieCard';
import { FilmDetail } from '../../interfaces/filmInterfaces';

interface Props {
  movie: FilmDetail[],
  title: string,

}

export const RecommendedSection = ({movie,title}: Props) => {

 

  return (
    <View style={ styles.container}>
      <Title title={title} marginLeft={10} marginBottom={10} size={25}/>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={movie}
      horizontal
      renderItem={({item, index})=> <MovieCard movie={item} id={item.episode_id} index={index}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,

  }
})