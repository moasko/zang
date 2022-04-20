import React from 'react'
import { Pressable, ToastAndroid, Text, View, Image } from 'react-native'
import Style from './CardStyle'
import PARAMS from '../../config/contes';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

//redux
import { addToCart } from "../../redux/actions/products";


function showToast(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}


const Item = ({ id, url, name, prix, preprix, categories, permalink, description }) => {

  const productSendToNavigation = {
    id,
    url,
    name,
    prix,
    preprix,
    categories,
    permalink,
    description
  }

  const navigation = useNavigation();
  const dispatch = useDispatch();


  function addToPorductsCart() {
    const productParamas = { id, url, name, prix, preprix, categories, permalink, qt: 1 }
    dispatch(addToCart(productParamas));
    showToast('Produit ajouté au panier');
  }


  function handleSelectProduct() {
    navigation.navigate('SingleProduct', { parametters: productSendToNavigation });
  }


  return (
    <Pressable
      style={Style.item}
      onPress={() => handleSelectProduct()} >
      <Image style={Style.productImage}
        resizeMode="contain"
        source={{
          uri: url !== null ? url : PARAMS.PROUCTS_IMG_PLACEHOLDER
        }} />
      <View style={Style.productInfo}>

        {/* <View style={Style.badg}>
        <Text style={{ color: "#ff0000" }}>-{Math.round((prix * 100) / preprix)}%</Text>
      </View> */}

        <View style={Style.title}>
          <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}>
          <View>
            <Text style={{ color: "#e84500", fontSize: 15, fontWeight: "bold" }}>{prix} {PARAMS.DEVIS}</Text>
            <Text style={{
              color: "gray",
              opacity: 0.5,
              fontStyle:"italic", 
             fontSize: 9,
              fontWeight: "bold"
            }}>{preprix} {PARAMS.DEVIS}</Text>
          </View>

          <Pressable onPress={() => addToPorductsCart()}>
            <View style={Style.addToCartBtn}>
              <Text style={{ color: "#fff", fontSize: 15 }}><MaterialCommunityIcons name="basket" color={"#fff"} size={15} /></Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
export default Item