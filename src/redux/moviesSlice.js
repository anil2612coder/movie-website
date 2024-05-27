import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//   const response = await axios.get(process.env.REACT_APP_API_URL);
//   return response.data;
// });

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    favorites: [],
    
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    },
  }
      
});

export const { addFavorite, removeFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
