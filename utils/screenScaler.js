
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
function verticalScale(size){return (height / guidelineBaseHeight) * size};
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
// console.log("w %d, h %d", width, height)
export { horizontalScale, verticalScale, moderateScale};