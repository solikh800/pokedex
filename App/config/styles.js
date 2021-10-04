import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from './colors';

export default {
  text: {
    color: colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: Platform.os === 'android' ? 'vazir' : 'vazir',
  },
};
