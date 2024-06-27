
import { Dimensions, PixelRatio } from "react-native";


//Screen Constatnts
const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;

const { height, width } = Dimensions.get("window");

/**
* Function to scale a value based on the size of the screen size and the original
* size used on the design.
*/
export default function(units = 1) {
return (width / SCREEN_WIDTH) * units;
}
const { width: width_screen, height: height_screen } = Dimensions.get("window");

export function heightPercentageToDP(heightPercent :any) {
//const screenHeight = Dimensions.get("window").height;
// Convert string input to decimal number
const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel((height_screen * elemHeight) / 100);
}
export function widthPercentageToDP(widthPercent:any) {
const screenWidth = Dimensions.get("window").width;
// Convert string input to decimal number
const elemWidth = parseFloat(widthPercent);
return PixelRatio.roundToNearestPixel((width_screen * elemWidth) / 100);
}
const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

export { verticalScale };

