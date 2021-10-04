import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
const colors = require('./colors');

export default {
  text: {
    color: colors.black,
    fontSize: RFPercentage(1.8),
    fontFamily: Platform.os === 'android' ? 'vazir' : 'vazir',
  },
};
