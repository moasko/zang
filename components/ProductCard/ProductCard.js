import React from 'react'
import {Pressable,Text,View,Image,StyleSheet,Dimensions} from 'react-native'
import Style from './CardStyle'

const DEVIS = "CFA";

const Item = ({ id, url, name, prix, preprix, categories, nav, description,permalink }) => {
    return (
      <Pressable
        style={Style.item}
        onPress={() => nav.navigate('SingleProduct', { id: id, img: url, name: name, prix: prix, categories: categories, description: description,permalink:permalink })} >
  
        <Image style={Style.productImage} source={{ uri: url }} />
  
        <View style={Style.title}>
          <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
          <Text numberOfLines={1} style={{ fontSize: 15 }}>{name}</Text>
          <Text style={{ color: "#ffd5b8", fontSize: 10, fontWeight: "bold", fontStyle: "italic" }}>{preprix} {DEVIS}</Text>
          <Text style={{ color: "#e84500", fontSize: 15, fontWeight: "bold" }}>{prix} {DEVIS}</Text>
        </View>
      </Pressable>
    );
  }

  
  
  
  export default Item