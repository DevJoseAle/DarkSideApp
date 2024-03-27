import { useAppSelector } from "../redux/hooks"

export const useCheckFavorites = (episode_id: string) => {
    const favorites = useAppSelector((state) => state.favoritesSlice)
    return favorites.some(movie => movie.episode_id === episode_id)
}