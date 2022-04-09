import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, StyleSheet, Pressable, Linking, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from 'react-native-render-html'
import AddToCartBtn from '../components/elements/AddToCartBtn';
import PARAMS from '../config/contes';

function SingleProduct({ route }) {

   const { parametters } = route.params;

   const navigation = useNavigation();
   const [singleProduct, setSingleProduct] = useState(null);
   const [isLoading, setLoading] = useState(true);

   const {
      id,
      url,
      name,
      prix,
      preprix,
      categories,
      permalink,
      description
   } = parametters;

   return (
      <View style={{ flex: 1 }}>
         <>
            <ScrollView>
               <Image
                  style={{
                     width: PARAMS.SCREEN_WIDTH,
                     height: 400
                  }}
                  source={{
                     uri: url
                  }}

               />
               <View style={{ padding: 20 }}>
                  <Text style={{ color: "gray", fontSize: 11, marginTop: 10, marginBottom: 10 }}>{categories}</Text>
                  <View style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginBottom: 10
                  }}>
                     <Text style={{ color: "#000", fontWeight: "bold", width: ((PARAMS.SCREEN_WIDTH / 2) + 20), fontSize: 20, }}>{name}</Text>
                     <Text style={{ color: "#e76300", fontSize: 20, fontWeight: "bold" }}>{prix} CFR</Text>
                  </View>

                  <HTML source={{ html: `${description}` || "<code>Aucune description</code>" }} contentWidth={PARAMS.SCREEN_WIDTH} tagsStyles={{
                     ul: {
                        padding:0,
                        margin:0,
                     },
                     li: {
                        padding:0,
                        margin:0,
                     }
                  }}  />
               </View>
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

               <AddToCartBtn id={id.toString()} permalink={permalink} prix={prix} name={name} img={url} />

               <Pressable onPress={() => Linking.openURL(`tel:+2250574641453`)}>
                  <View style={{
                     justifyContent: "center",
                     alignItems: "center",
                     width: 50,
                     height: 50,
                     borderRadius: 50,
                     backgroundColor: "#f5aa42",

                  }}>
                     <MaterialCommunityIcons name="phone" color={"#000"} size={20} />
                  </View>

               </Pressable>
               <Pressable onPress={() => navigation.navigate('order', { id: id })}>
                  <View style={{
                     width: ((PARAMS.SCREEN_WIDTH / 2) + 10),
                     backgroundColor: '#006dd2',
                     borderRadius: 50,
                  }}>
                     <Text style={styles.btnText}><MaterialCommunityIcons name="basket" color={"#fff"} size={20} /> Acheter</Text>
                  </View>
               </Pressable>

            </View>
         </>

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