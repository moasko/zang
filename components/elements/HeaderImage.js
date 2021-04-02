import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'


let SCREEN_WIDTH = Dimensions.get('window').width
const url = "https://scontent.fabj2-1.fna.fbcdn.net/v/t1.0-9/s960x960/136950995_100476275357808_5655216116538638056_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeEJwy0rEjjVE5tgbLdnCEPPqLokvS2VKhSouiS9LZUqFCxQT4z3NnO8vClyRhgptmMANNJVvbW5WWL5JnFKgz-w&_nc_ohc=LGlHx8jcaHQAX-ejIrE&_nc_ht=scontent.fabj2-1.fna&tp=7&oh=8572eff82d910d7492727075b339c9df&oe=60874192";
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
            <Cate></Cate>
        </View>

    )
}

export default HeaderImage