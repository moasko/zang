import React from 'react'
import { Image, Dimensions, View,FlatList } from "react-native"

let SCREEN_WIDTH = Dimensions.get('window').width


const Data = [
    { id: 1, img: "https://image.freepik.com/psd-gratuit/modele-banniere-horizontale-pour-dedouanement-du-vendredi-noir_23-2148745446.jpg" },
    { id: 3, img: "https://image.freepik.com/photos-gratuite/belle-femme-asiatique-aide-ordinateur-portable-achats-ligne-par-carte-credit-tout-tenue-decontractee-assis-bureau-dans-salon-maison_7861-1483.jpg" },
    { id: 4, img: "https://image.freepik.com/vecteurs-libre/abstract-black-friday-banniere-formes-modernes_1361-1715.jpg" }
]

const Item = ({ item }) => {
    return (
        <View style={{marginLeft:10,marginRight:10}}>
            <Image
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 120,
                    width: SCREEN_WIDTH,
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