import React from 'react'
import { Image, Dimensions, View } from "react-native"
import Cate from './Categoris'

let SCREEN_WIDTH = Dimensions.get('window').width

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

const Data =[
    {id:1,img:"iiii.png"},
    {id:2,img:"iiii.png"},
    {id:3,img:"iiii.png"},
    {id:4,img:"iiii.png"},
    {id:5,img:"iiii.png"}
]


let SCREEN_WIDTH = Dimensions.get('window').width
function HeaderImage() {
    return (

<FlatList
data={Data}
renderItem={Item}

/>
    )
}

export default HeaderImage