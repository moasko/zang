import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'


let SCREEN_WIDTH = Dimensions.get('window').width
const url = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-0/p180x540/168383776_106610331533931_7643711852637877031_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=WAhioqzwtzQAX_3gr5F&_nc_ht=scontent-cdt1-1.xx&tp=6&oh=347c0ce2cf1278a99a19773ffcf89598&oe=60935E6D";
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