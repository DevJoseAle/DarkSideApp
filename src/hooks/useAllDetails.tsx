import { useState, useEffect } from "react";
import { getMovie } from "../api/getMovie";
import { FilmDetail } from "../interfaces/filmInterfaces";
import { Character } from "../interfaces/characterInterfaces";
import { getCharacterData } from "../api/getCharacterData";
import { getData } from "../utils/getStorage";

interface Props{
    movie: FilmDetail | undefined;
    characterData: Character[];
    loading: boolean;
}

export const useAllDetails =(id: string ): Props =>{
    

    const [movie, setMovie] = useState<FilmDetail>();
    const [loading, setLoading] = useState(true);
    const [characterData, setCharacterData] = useState<Character[]>([]);
    
    const getMovieDetails = async () =>{

        try {
            //Obtener primero la película
            const movieResponse = await getMovie(id);
            setMovie(movieResponse);
            setLoading(false);
            //Si la peli existe, buscamos los personajes
            if(movieResponse){
                try {
                   const charactersData = await getCharacterData(movieResponse.characters);
                   setCharacterData(charactersData);
                } catch (error) {
                    console.error("Error al obtener los nombres de los personajes:", error);
                }
            }
        } catch (error) {
            console.log('Error al obtener detalles de la pelicula:', error);
        }

        
    } 
    useEffect(() => {
        getMovieDetails();
        
    }, [])

    return{
        movie,
        characterData,
        loading,
    }
}

