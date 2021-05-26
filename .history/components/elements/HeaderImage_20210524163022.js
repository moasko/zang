import React from 'react'
import { Image, Dimensions, View,FlatList } from "react-native"

let SCREEN_WIDTH = Dimensions.get('window').width


const Data = [
    { id: 1, img: "https://ci.jumia.is/cms/1_2021/W17/CI_W39_MSX_DESTOCKAGE.jpg" },
    { id: 3, img: "https://ci.jumia.is/cms/1_2021/W20/DAY1/Update/CI_W19_MS_ACD_INFINIX.jpg" },
    { id: 4, img: "https://ci.jumia.is/cms/1_2021/W19/DAY1/CI_W19_MSX_GEN_DJASSA.gif" }
]

const Item = ({ item }) => {
    return (
        <View style={{marginLeft:2,marginRight:2}}>
            <Image
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 145,
                    width: SCREEN_WIDTH - 40,
                    marginTop: 10,
                    borderRadius: 5
                }}
                source={{
                    uri: item.img
                }}
            />
        </View>
    )
}

function HeaderImage() {
    return (
        <FlatList
            data={Data}
            renderItem={Item}
            horizontal={true}
            numColumns={1}
            keyExtractor={item => (item.id).toString()}
        />
    )
}

export default HeaderImage