import React from 'react'
import {Pressable,Text,View,Image,StyleSheet,Dimensions} from 'react-native'
import Style from './CardStyle'
import PARAMS from '../../config/contes';


const Item = ({ id, url, name, prix, preprix, categories, nav, description,permalink }) => {
    return (
      <Pressable
        style={Style.item}
        onPress={() => nav.navigate('SingleProduct', { id: id, img: url, name: name, prix: prix, categories: categories, description: description,permalink:permalink })} >
        <Image style={Style.productImage} source={{ uri: url }} />
        <View style={{zIndex:14}}>
            <Text>-25%</Text>
          </View>
        <View style={Style.title}>
          <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
          <Text numberOfLines={1} style={{ fontSize: 15 }}>{name}</Text>
          <Text style={{ color: "#ffd5b8", fontSize: 10, fontWeight: "bold", fontStyle: "italic" }}>{preprix} {PARAMS.DEVIS}</Text>
          <Text style={{ color: "#e84500", fontSize: 20, fontWeight: "bold" }}>{prix} {PARAMS.DEVIS}</Text>
        </View>
      </Pressable>
    );
  }
  export default Item