import { Share, Alert } from "react-native";
import toastMessages from "./toastMessages";
import { MovieDetails } from "../interfaces/responseInterface";
import { FilmDetail } from "../interfaces/filmInterfaces";
import { posterData } from "../api/posterData";

export const onShare = async (fullMovie: FilmDetail) => {
    try {
      const result = await Share.share({
        title: '¡Hola! Te Recomiendo la siguiente película',
        message:
        `
        ${posterData[fullMovie.episode_id]}
        ¡Hola!
        Te recomiendo que veas la siguiente película: ${fullMovie.title},
        
        Director/es: ${fullMovie.director}
        Reparto: ${fullMovie.characters}
        Resumen: ${fullMovie.planets}


        ` ,
        
      },
      {
        dialogTitle: 'Compartir',
        subject: `Te recomiendo la siguiente Película: ${fullMovie.title}`,
      }
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
         toastMessages({type: 'success', text1: 'Compartido', text2: 'Hemos compartido esta peli!'})
        } 
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        toastMessages({type: 'error', text1: 'Lo sentimos🥲', text2: 'No hemos podido compartir esta peli!'})
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };