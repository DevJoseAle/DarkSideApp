import { useState, useEffect } from "react"
import { getRecommendedMovies} from "../api/getRecommendedMovies"
import { getData } from "../utils/getStorage"
import { FilmDetail } from "../interfaces/filmInterfaces"

export const useRecommendedMovies  = () =>{


  let data;
  const [loading, setLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<FilmDetail[] | undefined>([])

  const firstApiCall = async () =>{
    try {
      const getMovies = await getRecommendedMovies();
      setMovies(getMovies);
      setLoading(false);

    } catch (error) {
      console.log('catching error', error);
    }
}

  useEffect(() => { 
    setLoading(true);
    firstApiCall();
    data = getData('favorites');
  }, [])

  return{
    loading,
    movies,
    data
  }
}