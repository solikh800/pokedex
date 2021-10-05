import axios from 'axios';
import address from '../../config/address';
import {ToastAndroid} from 'react-native';
export const FULL_DATA = 'FULL_DATA';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

let netFalse = 'Please check your internet conection';
const tostFunc = errmessage => {
  return ToastAndroid.showWithGravityAndOffset(
    errmessage,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    200,
  );
};

export const getDataPokemon = pageNumber => {
  return async dispatch => {
    try {
      const result = await axios.get(
        `${address.server}${'?offset=0&limit=20'}`,
      );
      const data = result.data.results;
      const pokemonDetiles = data => {
        let finalData = [];
        data.forEach(async pokemon => {
          const resultDetails = await axios.get(
            `${address.server}/${pokemon.name}`,
          );
          finalData.push(resultDetails.data);
        });
        return finalData;
      };
      const resultData = pokemonDetiles(data);
      dispatch({
        type: FULL_DATA,
        data: resultData,
      });
    } catch (error) {
      if (!!error.message) {
        if (error.response !== undefined) {
          tostFunc(error.response.data.message);
        } else {
          tostFunc(netFalse);
        }
      }
    }
  };
};

export const addBookmark = idAdd => {
  return dispatch => {
    dispatch({
      type: ADD_BOOKMARK,
      idAddFov: idAdd,
    });
  };
};
export const removeBookmark = id => {
  return async (dispatch, getState) => {
    const {pokemonReducer} = getState();
    const filtered = pokemonReducer.fovData.filter(p => p.id !== id);
    dispatch({
      type: REMOVE_BOOKMARK,
      idRemoveFov: filtered,
    });
  };
};
