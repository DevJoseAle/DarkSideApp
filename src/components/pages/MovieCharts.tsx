import React, { useState } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View, VirtualizedList, FlatList } from 'react-native';
import { colors, globalStyles } from '../../config/theme/AppTheme'
import { useAllDetails } from '../../hooks/useAllDetails';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/Navigation';
import {LineChart} from "react-native-chart-kit";
import { Character } from '../../interfaces/characterInterfaces';
import { CustomLoadingSpinner } from '../organisms/CustomLoadingSpinner';
import { CustomIcon } from '../molecules/CustomIcon';
import { useNavigation } from '@react-navigation/native';


interface Props extends StackScreenProps<RootStackParams, 'MovieCharts'>{};


export const MovieCharts = ({route}:Props) => {
  
  const { episode_id } = route.params;
  const {characterData, loading} = useAllDetails(episode_id.toString());
  const navigation = useNavigation();
  const gender = characterData.map((character) => character.gender);
  const uniqueValues = Array.from(new Set(gender));
  const countMap: { [key: string]: number } = {};
  gender.forEach(value => {
        countMap[value] = (countMap[value] || 0) + 1;
  });

  
  return (
    <View style={ [globalStyles.mainContainer]}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
          <CustomIcon 
              name='chevron-back-outline' 
              size={20} 
              color={'black'} 
              isPressable={false}
              
              />
      </Pressable>

      <View style={{marginBottom: 20}}/>
        <View >
        <Text style={[globalStyles.title, {color: colors.white, textAlign: 'center'}]}>Gender Chart</Text>
          <LineChart
            data={{
              labels: uniqueValues,
              datasets: [
                {
                  data: [0, ...Object.values(countMap)],
                }
              ]
            }}
            width={Dimensions.get("window").width} 
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} 
            chartConfig={{
              backgroundColor: "#0012139B",
              backgroundGradientFrom: "#3D4C50",
              backgroundGradientTo: "#26BAFF",

              color: () => `rgba(255, 255, 255, 1)`,
              labelColor: () => `rgba(255, 255, 255, 1)`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: uniqueValues.length,
                strokeWidth: "3",
                stroke: "#000000"
              }
            }}
            bezier
            style={{
              marginHorizontal:5,
              marginVertical: 8,
              borderRadius: 16
            }}
            
            
          
          />
        </View>

           
          <FlatList 
          data={characterData} renderItem={({item}) => <CharacterItem character={item}/>}/>  
          
    </View>
  )
}

export const CharacterItem = ({character}: {character: Character}) => {
  return (
    <View style={{justifyContent: 'center', marginVertical: 6, marginHorizontal: 5, backgroundColor: '#FFFFFFCA', borderRadius: 10, height: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>  
        <Text style={{ color: 'black', }}>
          {character.name}
        </Text>
        <Text style={{color: 'black'}}>
          {character.gender}
        </Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      width: 60,
      height:50,
      top: 5,
      left: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#FFFFFF',
      borderRadius: 30,
      padding: 10
    }

})


