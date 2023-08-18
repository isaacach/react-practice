

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {

    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
})

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  type: 'song/addSong',
  paylod: 'new song1'
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));