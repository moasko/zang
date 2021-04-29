import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Dimensions, Text, StyleSheet, Pressable } from 'react-native'
import HTML from 'react-native-render-html'
import API from '../components/config'
import AddToCartBtn from '../components/elements/AddToCartBtn';

const SCREEN_WIDTH = Dimensions.get('window').width
function SingleProduct({ route }) {
   const navigation = useNavigation();
   const [state, setState] = useState('');

   let { id, name, prix, categories, img, description,permalink } = route.params
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
               <Text>{permalink}</Text>
               {(state.id == "") ? <Text>"Loading..."</Text>:<Text>{state.id}</Text>}
              
               <HTML source={{ html: `<html> <body>${description}</body> </html>` || "<code>Aucune description</code>" }} contentWidth={SCREEN_WIDTH} />
            </View>
         </ScrollView>

         <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <AddToCartBtn id={id.toString()} permalink={permalink} />
            <Pressable onPress={() => navigation.navigate('order', { id: id })}>
               <View style={{
                  width: (SCREEN_WIDTH / 2),
                  backgroundColor: '#006dd2'
               }}>
                  <Text style={styles.btnText}>Acheter</Text>
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