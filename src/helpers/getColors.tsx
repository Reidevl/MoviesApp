import ImageColors from "react-native-image-colors";


export const getImageColors = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {})

    let primary;
    let secondary;

    if(colors.platform === 'android'){
        const averageColor = colors.average
        primary = colors.dominant;
        secondary = colors.average;
    } 
    if( colors.platform === 'ios'){
        const backgroundColor = colors.background;
        primary = colors.primary;
        secondary = colors.secondary;
    }

    return [ primary, secondary ]
  }