import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, StyleSheet, Pressable, Linking } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from 'react-native-render-html'
import AddToCartBtn from '../components/elements/AddToCartBtn';
import PARAMS from '../config/contes';
import { useSelector } from 'react-redux'


function SingleProduct({ route }) {

   const { product_id } = route.params;
   const navigation = useNavigation();

   const product = useSelector(state => state.products.products.find(item => item.id === product_id));

   console.log(product);

   const {
      name,
      short_description,
      images,
      price,
      categories,
      permalink,
      id
   } = product;

   const principalImage = images[0].src
   const categorie = categories[0].name

   return (
      <View style={{ flex: 1 }}>
         <ScrollView>
            <Image
               style={{
                  width: PARAMS.SCREEN_WIDTH,
                  height: 400
               }}
               source={{
                  uri: principalImage
               }}

            />
            <View style={{ padding: 12 }}>
               <Text style={{ color: "#e76300", fontSize: 35, fontWeight: "600" }}>{price} CFR</Text>
               <Text style={{ color: "gray", fontSize: 20, fontWeight: "600" }}>{categorie}</Text>
               <Text style={{ color: "#000", fontSize: 35, fontWeight: "600" }}>{name}</Text>
               <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>{product.id}</Text>
               <HTML source={{ html: `${short_description}` || "<code>Aucune description</code>" }} contentWidth={PARAMS.SCREEN_WIDTH} />
            </View>
         </ScrollView>

         <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <AddToCartBtn id={id.toString()} permalink={permalink} prix={price} name={name} img={principalImage} />
            <Pressable onPress={() => navigation.navigate('order', { id: id })}>
               <View style={{
                  width: (PARAMS.SCREEN_WIDTH / 2),
                  backgroundColor: '#006dd2'
               }}>
                  <Text style={styles.btnText}><MaterialCommunityIcons name="basket" color={"#fff"} size={20} /> Acheter</Text>
               </View>
            </Pressable>
         </View>
         <Pressable onPress={() => Linking.openURL(`tel:+2250574641453`)}>
            <View style={{
               width: (PARAMS.SCREEN_WIDTH),
               borderWidth: 2,
               borderColor: "orange"
            }}>
               <Text style={styles.callBtn}><MaterialCommunityIcons name="phone" color={"orange"} size={20} /> +225 05 84 47 24 64</Text>
            </View>
         </Pressable>
      </View>
   )

}

const styles = StyleSheet.create({
   btnText: {
      fontSize: 15,
      fontWeight: "bold",
      color: '#fff',
      textAlign: "center",
      padding: 9
   },
   callBtn: {
      fontSize: 15,
      fontWeight: "bold",
      color: 'orange',
      textAlign: "center",
      padding: 6
   }
})

export default SingleProduct