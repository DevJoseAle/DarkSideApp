import React, { useEffect, useState } from 'react'
import {  Image, ImageBackground, ScrollView, View } from 'react-native'
import {  globalStyles } from '../../config/theme/AppTheme';
import { RecommendedSection } from '../organisms/RecommendedSection';
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomLoadingSpinner } from '../organisms/CustomLoadingSpinner';


export const HomePage = () => {
 
    const {movies, loading, data} = useRecommendedMovies()

    const getData = async (item: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(item);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
       console.log(e, 'Error al obtener data');
      }
    };
    
    useEffect(() => {

      getData('favorites')
      
     
    }, [])
    if(loading) return <CustomLoadingSpinner />
  return (
    <ScrollView
    style={
        globalStyles.mainContainer
    }>  
     <ImageBackground
      source={require('../../assets/bg3.jpg')}
      style={{flex:1, opacity:1}}
      >

      {/* Busqueda  */}
      {/* <SearchOrganism
     
     /> */}

     <View>
      <View style={{height: 10}}/>
      <Image 
        source={require('../../assets/logo.png')} 
        style={{width:'90%', height: 130, marginVertical: 20, alignSelf: 'center'}}
        />
     </View>

        <RecommendedSection
        title={''}
        movie={movies!}
        />
         <View style={{marginBottom: 70}} />
      </ImageBackground>
    </ScrollView>
  )
}
