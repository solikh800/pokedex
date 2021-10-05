import {FULL_DATA} from '../actions/dataPokemon';

const initialState = {
  fullData: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FULL_DATA:
      return {...state, fullData: action.data};
    // case TOP_TEN_MORE:
    //   return {...state, topTens: [...state.topTens, action.toptenMore]};

    default:
      return state;
  }
};
