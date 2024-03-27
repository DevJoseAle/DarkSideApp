import React from 'react'
import {  View, FlatList, ImageBackground } from 'react-native';
import {  globalStyles } from '../../config/theme/AppTheme'
import { MovieListItem } from '../molecules/MovieListItem';
import { useAppSelector } from '../../redux/hooks';
import { NoFavorites } from '../atoms/NoFavorites';


export const FavoritePage = () => {
  
  const favorites = useAppSelector((state) => state.favoritesSlice);
  return (
    <View
       style={ globalStyles.mainContainer}
    >
      <ImageBackground
      source={require('../../assets/bg3.jpg')}
      style={{flex:1, opacity:1}}
      >

      {
        favorites.length > 0
        ? <FlatList
        data={favorites}
        keyExtractor={(item) => item.episode_id}
        renderItem={({item}) => <MovieListItem 
        movie={item} 
        />}
        />
        : <NoFavorites/>
      }
      </ImageBackground>
    </View>
  )
}

