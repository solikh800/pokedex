import {FULL_DATA, ADD_BOOKMARK, REMOVE_BOOKMARK} from '../actions/dataPokemon';

const initialState = {
  fullData: [],
  fovData: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FULL_DATA:
      return {...state, fullData: action.data};
    //Fov
    case ADD_BOOKMARK:
      return {...state, fovData: [action.idAddFov, ...state.fovData]};
    case REMOVE_BOOKMARK:
      return {...state, fovData: action.idRemoveFov};

    default:
      return state;
  }
};
