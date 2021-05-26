import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'


let SCREEN_WIDTH = Dimensions.get('window').width
const url = "https://freenulledthemes.com/wp-content/uploads/2020/10/Codex-Slider-Pack-Nulled-Free-Download.png";
function HeaderImage() {
    return (
        <View>
            <Image
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 225,
                    width: SCREEN_WIDTH
                }}
                source={{
                    uri: url
                }}
            />
       
        </View>

    )
}

export default HeaderImage