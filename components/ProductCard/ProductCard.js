import React from 'react'
import { Pressable, ToastAndroid, Text, View, Image} from 'react-native'
import Style from './CardStyle'
import PARAMS from '../../config/contes';
//redux
import { addToCart,singleProduct } from "../../redux/actions/products";



function showToast(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}



const Item = ({ id, url, name, prix, preprix, categories, nav, permalink }) => {


  function addToPorductsCart() {
    const productParamas = { id, url, name, prix, preprix, categories, permalink, qt: 1 }
    dispatch(addToCart(productParamas));
    showToast('Produit ajouté au panier');
  }


  function handleSelectProduct() {
    nav.navigate('SingleProduct', { product_id:id})
  }

  return (
    <Pressable
      style={Style.item}
      onPress={() => handleSelectProduct()} >
      <Image style={Style.productImage} source={{ uri: url }} />
      <View style={Style.badg}>
        <Text style={{ color: "#ff0000" }}>-{Math.round((prix * 100) / preprix)}%</Text>
      </View>
      <View style={Style.title}>
        <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
        <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{id}</Text>
        <Text numberOfLines={1} style={{ fontSize: 15 }}>{name}</Text>
        <Text style={{ color: "#ffd5b8", fontSize: 10, fontWeight: "bold", fontStyle: "italic" }}>{preprix} {PARAMS.DEVIS}</Text>
        <Text style={{ color: "#e84500", fontSize: 20, fontWeight: "bold" }}>{prix} {PARAMS.DEVIS}</Text>
      </View>
      <Pressable onPress={() => addToPorductsCart()}>
        <View style={Style.addToCartBtn}>
          <Text style={{ color: "#fff", fontSize: 15 }}>Ajouter au panier</Text>
        </View>
      </Pressable>
    </Pressable>
  );
}
export default Item