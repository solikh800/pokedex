import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import {addBookmark, removeBookmark} from './../store/actions/dataPokemon';

const BookmarkComponent = ({dataItem}) => {
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState(false);
  const [nameBookmark, setnameBookmark] = useState('unbookmark');
  const fullData = useSelector(state => state.pokemonReducer.fullData);
  const fovData = useSelector(state => state.pokemonReducer.fovData);

  const handleBookmark = data => {
    const index = fovData.find(item => item.id === data.id);
    const index1 = fullData.find(item => item.id === data.id);

    if (index === undefined) {
      dispatch(addBookmark(index1));
    } else {
      dispatch(removeBookmark(dataItem.id));
    }
  };
  useEffect(() => {
    const fovIndex = fovData.find(item => item.id === dataItem.id);
    if (fovIndex === undefined) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }

    setnameBookmark(bookmark === false ? 'bookmark-outline' : 'bookmark');
  }, [fovData, dataItem.id, fullData, bookmark]);

  return (
    <TouchableOpacity>
      <Icon
        name={nameBookmark}
        size={RFPercentage(4)}
        color={colors.background}
        onPress={() => handleBookmark(dataItem)}
      />
    </TouchableOpacity>
  );
};

export default BookmarkComponent;
