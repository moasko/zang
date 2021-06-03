import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Dimensions, Text, StyleSheet, Pressable, Linking } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from 'react-native-render-html'
import API from '../components/config'
import AddToCartBtn from '../components/elements/AddToCartBtn';
import PARAMS from '../config/contes';

function SingleProduct({ route }) {
   const navigation = useNavigation();
   const [state, setState] = useState('');

   let { id, name, prix, categories, img, description, permalink } = route.params
   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      API.get(`products/${id}`)
         .then(data => {
            setState(data)
         })
         .catch(e => {
            throw e
         })
   }, [])
   return (
      <View style={{ flex: 1 }}>
         <ScrollView>
            <Image
               style={{
                  width: PARAMS.SCREEN_WIDTH,
                  height: 400
               }}
               source={{
                  uri: img
               }}

            />
            <View style={{ padding: 12 }}>
               <Text style={{ color: "#e76300", fontSize: 35, fontWeight: "600" }}>{prix} CFR</Text>
               <Text style={{ color: "gray", fontSize: 20, fontWeight: "600" }}>{categories}</Text>
               <Text style={{ color: "#000", fontSize: 35, fontWeight: "600" }}>{name}</Text>
               {(state.id == "") ? <Text>"Loading..."</Text> : <Text>{state.id}</Text>}

               <HTML source={{ html: `${description}` || "<code>Aucune description</code>" }} contentWidth={PARAMS.SCREEN_WIDTH} />
            </View>
         </ScrollView>

         <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <AddToCartBtn id={id.toString()} permalink={permalink} prix={prix} name={name} img={img} />
            <Pressable onPress={() => navigation.navigate('order', { id: id })}>
               <View style={{
                  width: (PARAMS.SCREEN_WIDTH / 2),
                  backgroundColor: '#006dd2'
               }}>
                  <Text style={styles.btnText}><MaterialCommunityIcons name="basket" color={"#fff"} size={20} /> Acheter</Text>
               </View>
            </Pressable>
         </View>
         <Pressable onPress={() => Linking.openURL(`tel:+2250584472464`)}>
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