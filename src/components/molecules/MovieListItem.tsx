import { useNavigation, NavigationProp } from "@react-navigation/native"
import { Platform, Pressable, View, Image, Text, StyleSheet } from "react-native"
import { colors } from "../../config/theme/AppTheme"
import { Movie } from "../../interfaces/responseInterface"
import { RootStackParams } from "../../navigator/Navigation"
import { CustomIcon } from "./CustomIcon"
import { useAppDispatch } from "../../redux/hooks"
import { removeFavorite } from "../../redux/slices/favoritesSlice"
import toastMessages from "../../utils/toastMessages"
import { onShare } from "../../utils/onShared"
import { FilmDetail } from "../../interfaces/filmInterfaces"
import { posterData } from "../../api/posterData"


interface Props{
    movie: any;
    isFavorite?: boolean;
  }
  export const MovieListItem = ({movie, isFavorite=true}:Props) => {

    const dispatch = useAppDispatch()
    const platform = Platform.OS;
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const removeFavorites = () => {
      dispatch(removeFavorite({episode_id: movie.episode_id.toString()}))
      toastMessages({type: 'error', text1: 'Eliminado de Favoritos', text2: 'Hemos Eliminado esta peli de Favoritos!'})
      
    }

    return (
      <Pressable
      onPress={() => (navigation.navigate('Movie', {episode_id: movie.episode_id.toString(), previousScreen:'Inicio'} ))}
       style={styles.container}>
        <View style={styles.movieCard}>
          <Image
            style={styles.poster}
            source={{uri: posterData[movie.episode_id]}} />
          
          <View style={{marginLeft: 10, width:'40%'}}>
  
            <Text 
            style={{textAlign : 'center', color: colors.text, fontWeight: 'bold', fontSize: 16}}>
              {movie.title}
            </Text>
          </View>
  
          <View style={{flexDirection: 'row'}}>
            {
              isFavorite && <CustomIcon 
              name='close-circle-outline' 
              size={30} 
              color={colors.text}
              onpress={removeFavorites}
              />

            }

          </View>
  
        </View>
      </Pressable>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 6,
      padding: 9,
      height:90,
      borderRadius: 10,
      borderColor: "#343434",
      borderWidth: 1.5,
      backgroundColor:"#0F0F0F",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center',
      
    },
    movieCard:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    poster:{
      width: 60,
      height: 80,
      borderRadius: 10
    }
  })