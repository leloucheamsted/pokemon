import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon'
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const initialState = {
    loading: false,
    pokemons: [],
    error: '',
}
export const getPokemonAsync = createAsyncThunk('pokemons/getPokemonAsync',
    async () => {
        const response = await fetch(`${baseUrl}`, requestOptions)
        const result = await response.text();
        const pokemons = await JSON.parse(result)
        //  console.log(pokemons)
        return { pokemons }
        //  })
    });

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemonById: (state, action) => {
            // console.log(action.payload)
            // console.log(state.pokemons)
            return state.pokemons.filter((pokemon) => pokemon.id === action.payload)

        },

    },
    extraReducers: builder => {
        builder.addCase(getPokemonAsync.pending, state => {
            state.loading = true
        })
        builder.addCase(getPokemonAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.loading = false
            state.pokemons = action.payload.pokemons
            state.error = ''
        })

        builder.addCase(getPokemonAsync.rejected, (state, action) => {
            //console.log(action.payload)
            state.loading = false
            state.pokemons = []
            state.error = ''
        })
    }
})

export var getPokemonsByid = id => state => {
    console.log(id)
    return state.pokemons.pokemons[id - 1]
}
export const { getPokemonById } = pokemonSlice.actions

export default pokemonSlice.reducer;