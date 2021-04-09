import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Dimensions, Text } from 'react-native'
import { Header, Button } from 'react-native-elements'
import HTML from 'react-native-render-html'
import API from '../components/config'

const SCREEN_WIDTH = Dimensions.get('window').width

function SingleProduct({ route}) {
   const [state, setState] = useState('');

   let { id, name, prix, categories, img, description } = route.params

   API.get(`products/${id}`)
      .then(data => {
         if (data)
            setState(data)
      })
      .catch(e => {
         throw e
      })

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
               <Text style={{color:"#e76300",fontSize:35,fontWeight:"600"}}>{prix} CFR</Text>
               <Text style={{color:"gray",fontSize:20,fontWeight:"600"}}>{categories}</Text>
               <Text style={{color:"#000",fontSize:35,fontWeight:"600"}}>{name}</Text>

               <HTML source={{ html:`<html> <body>${description}</body> </html>`  || "<code>Aucune description</code>" }} contentWidth={SCREEN_WIDTH} />
            </View>
         </ScrollView>

         <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
            <Button
               title="Acheter"
               buttonStyle={{
                  backgroundColor: "orange",
                  width: 110
               }}
            />
            <Button
               title="ajouter au panier"
               buttonStyle={{
                  backgroundColor: "green",
                  width: 150

               }}
            />

         </View>

      </View>
   )

}

export default SingleProduct