import axios from "axios";
import { Character } from "../interfaces/characterInterfaces";




export const getCharacterData = async(url:string[]): Promise< Character[] | [] > =>{
    ;
    try {
        const charactersRequests = url.map(async (url) =>{
            const response = await axios.get<Character>(url);
            return response.data
        })
        const characters = await Promise.all(charactersRequests);
        return characters

    } catch (error) {
        console.log('Error al obtener Data de los  Personajes:', error);
        return [];
    }
}