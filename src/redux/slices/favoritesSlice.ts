import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setStorage } from '../../utils/setStorage';
import { removeStorage } from '../../utils/removeItemStorage';
import toastMessages from '../../utils/toastMessages';

interface AddFavoriteState {
  title:  string;
  release_date:   string;
  episode_id: string;
  poster: string;
};
interface RemoveFavoriteState {
  episode_id:  string;
};

const initialState: AddFavoriteState[] = [];

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AddFavoriteState>) =>{

      const {episode_id}  = action.payload;
      if(state.some(movie => movie.episode_id === episode_id)) {
        toastMessages({type: 'error', text1: 'Lo sentimos', text2: 'Peli ya guardada'});
        return;
      };
      state.push(action.payload);
      setStorage(state, 'favorites');
      toastMessages({type: 'success', text1: 'Agregado a Favoritos', text2: 'Hemos Agregado esta peli a Favoritos!'});

      
    },
    removeFavorite: (state, action: PayloadAction<RemoveFavoriteState>) =>{

      const {episode_id}  = action.payload;
      const dataFiltered = state.filter(movie => movie.episode_id !== episode_id);
      removeStorage();
      setStorage(dataFiltered, 'favorites');
      return dataFiltered;
    }
  },
})

export const { addToFavorites, removeFavorite} = favoriteSlice.actions

