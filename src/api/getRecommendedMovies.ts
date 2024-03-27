import axios from "axios";
import { FilmDetail } from "../interfaces/filmInterfaces";


export const getRecommendedMovies = async (): Promise<FilmDetail[]| undefined> => {
    const url = `https://swapi.dev/api/films/`;
    
    try {
        const response = await axios.get(url);
        const data= response.data.results;
        return data
    } catch (error) {
        console.log('Error al obtener peliculas :', error);
    }
    
}


