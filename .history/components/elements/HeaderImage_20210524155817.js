import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'

let SCREEN_WIDTH = Dimensions.get('window').width


const Data =[
    {id:1,img:"https://image.freepik.com/psd-gratuit/modele-banniere-horizontale-pour-dedouanement-du-vendredi-noir_23-2148745446.jpg"},
    {id:2,img:"https://image.freepik.com/psd-gratuit/modele-banniere-concept-vendredi-noir_23-2148696485.jpg"},
    {id:3,img:"https://image.freepik.com/psd-gratuit/modele-banniere-horizontale-pour-vendredi-noir-femme-triangles_23-2148806749.jpg"},
    {id:4,img:"https://image.freepik.com/vecteurs-libre/abstract-black-friday-banniere-formes-modernes_1361-1715.jpg"}
]

const Item =({item})=>{
    return(
         <View>
            <Image
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    width: SCREEN_WIDTH,
                    marginTop:10,
                    borderRadius:5
                }}
                source={{
                    uri: item.img
                }}
            />
        </View>
    )
}


let SCREEN_WIDTH = Dimensions.get('window').width
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