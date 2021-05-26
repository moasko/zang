import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'


let SCREEN_WIDTH = Dimensions.get('window').width
const url = "https://image.freepik.com/psd-gratuit/campagne-vente-ligne-vendredi-noir_23-2148309530.jpg";
function HeaderImage() {
    return (
        <View>
            <Image
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    width: SCREEN_WIDTH,
                    marginTop:10
                }}
                source={{
                    uri: url
                }}
            />
       
        </View>

    )
}

export default HeaderImage