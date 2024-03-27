import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/AppTheme';
import { Title } from '../atoms/Title';
import { Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/Navigation';


interface Props{
    plot: string;
    released: string;
    episode_id: number;
    directores: string;
}
export const MovieDetails = ({
    plot,
    released,
    episode_id,
    directores
    }: Props) => {


      const plainText = plot.split('\r\n').join(' ');
      const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <>
    <Pressable
             style={({pressed}) => [{opacity: pressed ? 0.4 : 1}, styles.button]}
             onPress={() => navigation.navigate('MovieCharts', {episode_id: episode_id.toString(), previousScreen: 'Movie'})}>
              <Text style={[globalStyles.subTitle, {color: colors.white}]}>Ir a Gráficas</Text>
              </Pressable>
      <View style={[globalStyles.globalMargin, {marginTop: 20, width: '100%'}]}>

        <View style={styles.detailsContainer}>
          <Title title={'Estreno:'} size={25} />
          <Text style={styles.subtitles}>{released}</Text>
          <Title title={'Director/es:'} size={25} />
          <Text style={styles.subtitles}>{directores}</Text>
          <Title title={'ID:'} size={25} />
          <Text style={styles.subtitles}>{`${episode_id}`}</Text>
          <Title title={'Resumen:'} size={25} />
          <Text style={[styles.subtitles, { textAlign: 'center'}]}>{plainText}</Text>
          
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
    detailsContainer:{
    
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitles:{ 
        width:'90%',
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFFBF',
        marginVertical: 5
    },
    button:{
      width: '90%', 
      height:50, 
      marginTop: 30,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor:'#00BFFFBF'  , 
      borderRadius: 10, 
      alignSelf: 'center', 
      marginRight: 10
    }
})