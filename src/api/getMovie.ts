import axios from "axios";
import { FilmDetail } from "../interfaces/filmInterfaces";
import { posterData } from "./posterData";

export const getMovie = async (id:string): Promise<FilmDetail| undefined> => {
    const url = `http://swapi.dev/api/films/${id}`;
    try {
        const response = await axios.get(url);
        const data =  response.data;
        return data
    } catch (error) {
        console.log('Error al obtener peliculas GetMovie:', error);
    }
    
}

export const getPoster = async (id: string): Promise<string> => {
    const numberId = Number(id);
    const response = await axios.get(posterData[numberId]);
    const data =  response.data;
    return data
}