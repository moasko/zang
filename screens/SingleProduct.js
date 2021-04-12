import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Dimensions, Text, StyleSheet, Pressable } from 'react-native'
import HTML from 'react-native-render-html'
import API from '../components/config'

const SCREEN_WIDTH = Dimensions.get('window').width
function SingleProduct({ route }) {
   const [state, setState] = useState('');

   let { id, name, prix, categories, img, description } = route.params
   useEffect(() => {
      API.get(`products/${id}`)
         .then(data => {
            setState(data)
            console.log(data)
         })
         .catch(e => {
            throw e
         })
   }, [])
   Image.prefetch(img)
   return (
      <View style={{ flex: 1 }}>
         <ScrollView>
            <Image
               style={{
                  width: SCREEN_WIDTH,
                  height: 350
               }}
               source={{
                  uri: img
               }}

            />
            <View style={{ padding: 12 }}>
               <Text style={{ color: "#e76300", fontSize: 35, fontWeight: "600" }}>{prix} CFR</Text>
               <Text style={{ color: "gray", fontSize: 20, fontWeight: "600" }}>{categories}</Text>
               <Text style={{ color: "#000", fontSize: 35, fontWeight: "600" }}>{name}</Text>
               <Text>{(state.id=="")? "loading...":state.id}</Text>
               <HTML source={{ html: `<html> <body>${description}</body> </html>` || "<code>Aucune description</code>" }} contentWidth={SCREEN_WIDTH} />
            </View>
         </ScrollView>

         <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Pressable>
               <View style={{
                  width: (SCREEN_WIDTH / 2),
                  backgroundColor: '#e76300'
               }}>
                  <Text style={styles.btnText}>Ajouter au panier</Text>
               </View>
            </Pressable>
            <Pressable>
               <View style={{
                  width: (SCREEN_WIDTH / 2),
                  backgroundColor: '#006dd2'
               }}>
                  <Text style={styles.btnText}>Commander</Text>
               </View>
            </Pressable>

         </View>

      </View>
   )

}

const styles = StyleSheet.create({
   btnText: {
      fontSize: 15,
      fontWeight: "bold",
      color: '#fff',
      textAlign: "center",
      padding: 15
   }
})

export default SingleProduct