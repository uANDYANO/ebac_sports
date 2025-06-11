import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternar: (state, action: PayloadAction<Produto>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { alternar } = favoritosSlice.actions
export default favoritosSlice.reducer
