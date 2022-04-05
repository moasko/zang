import React, { useState, useEffect,useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, StyleSheet, Pressable, Linking, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from 'react-native-render-html'
import AddToCartBtn from '../components/elements/AddToCartBtn';
import PARAMS from '../config/contes';
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProduct } from '../utils/backend/products';
import { set } from 'react-native-reanimated';
import { setSingleProductAction } from '../redux/actions/products';

function SingleProduct({ route }) {

   const { product_id } = route.params;
   const navigation = useNavigation();
   const [singleProduct, setSingleProduct] = useState(null);
   const [isLoading, setLoading] = useState(true);

   const dispatch = useDispatch();


   const product = useSelector(state => state.products.products.find(item => item.id === product_id));


   const mountedRef = useRef(true)
   useEffect(() => {
      setLoading(true)
      getSingleProduct(product_id)
         .then(res => {
            if (mountedRef.current) {
            dispatch(setSingleProductAction(res.data))
            setSingleProduct(res.data)
            }
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setLoading(false)
         })

         return () => {
            mountedRef.current = false;
         }
   }, [])


  const singleProductSelect = useSelector(state => state.products.singleProduct)

   const {
      name,
      short_description,
      images =images[0].src,
      price,
      categories =categories[0].name,
      permalink,
      id
   } = singleProduct;


   return (
      <View style={{ flex: 1 }}>
         {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#e76300" /></View> : (
            <>
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
                     <Text style={{ color: "gray", fontSize: 20, fontWeight: "600" }}>{categories}</Text>
                     <Text style={{ color: "#000", fontSize: 35, fontWeight: "600" }}>{name}</Text>
                     <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>{product.id}</Text>
                     <HTML source={{ html: `${short_description}` || "<code>Aucune description</code>" }} contentWidth={PARAMS.SCREEN_WIDTH} />
                  </View>
               </ScrollView>

               <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <AddToCartBtn id={id.toString()} permalink={permalink} prix={price} name={name} img={images} />
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
            </>
         )}

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