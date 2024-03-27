import React, { useEffect, useLayoutEffect, useState} from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../../navigator/Navigation'
import { StackScreenProps } from '@react-navigation/stack'
import { useNavigation, useRoute } from '@react-navigation/native';
import { globalStyles } from '../../config/theme/AppTheme';
import { MovieDetailHeader } from '../organisms/MovieDetailsHeader';
import { MovieDetails } from '../organisms/MovieDetails';
import { CustomLoadingSpinner } from '../organisms/CustomLoadingSpinner';
import { getCharacterData } from '../../api/getCharacterData';
import { useAllDetails } from '../../hooks/useAllDetails';

interface Props extends StackScreenProps<RootStackParams, 'Movie'>{};
export const MoviePage =   ({route}:Props) => {
  
  
  const {episode_id} = route.params;
  const navigation = useNavigation();
  const params = useRoute();
  const {movie, loading} = useAllDetails(episode_id.toString());

  if(!movie )return;
  return (
    <>
    {loading && <CustomLoadingSpinner />}
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={[globalStyles.mainContainer, {backgroundColor:'#000000'}]}>
        <MovieDetailHeader fullMovie={movie}  />
        <MovieDetails 
          plot={movie.opening_crawl} 
          released={movie.release_date.toString()} 
          episode_id={movie.episode_id} 
          directores={movie.director} />
      </ScrollView>
    </>
  )
}
