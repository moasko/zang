import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Image, Pressable } from 'react-native';
import SearchBar from '../components/fragments/SearchBar'
import API from '../components/config'

//declaration des variables 

const PARAMS ={
  SCREEN_WIDTH : Dimensions.get('window').width,
  BORDER_WIDTH  :1.5,
}
const PRODUCTD_DISPLAY_LIMIT = 30;
const DEVIS = "FCFA";


const Item = ({ id, url, name, prix, categories, nav, description }) => (
  <Pressable
    style={styles.item}
    onPress={() => nav.navigate('SingleProduct', { name: name, img: url, id: id, des: description })} >
    <Image
      style={styles.productImage}
      source={{
        uri: url,
      }}
    />
    <View style={styles.title}>
      <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
      <Text style={{ fontSize: 15 }}>{name}</Text>
      <Text style={{ color: "#e84500", fontSize: 18, fontWeight: "bold" }}>{prix}{DEVIS}</Text>
    </View>
  </Pressable>
);
const montres = "montres"

function ProductsSearchScreen({ navigation }) {
  const [state, setState] = useState('')
  API.get(`products?categories?slug=${montres}`, {
    per_page: PRODUCTD_DISPLAY_LIMIT
  })
    .then(data => {
      setState(data)
      console.log(data)
    })
    .catch(error => {
      console.log(error);
    });
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      nav={navigation}
      url={item.images[0].src}
      name={item.name}
      prix={item.sale_price}
      description={item.short_description}
      categories={item.categories[0].name}
    />
  );
  return (

    <SafeAreaView style={styles.container}>
      <SearchBar />
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />

    </SafeAreaView>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexWrap: "wrap",
    margin: 5,
    height: 250,
    width: (PARAMS.SCREEN_WIDTH / 2),
    borderColor: "#f77918",
    borderEndWidth: PARAMS.BORDER_WIDTH,
    borderLeftWidth: PARAMS.BORDER_WIDTH,
    borderBottomWidth: PARAMS.BORDER_WIDTH,
    borderTopWidth: PARAMS.BORDER_WIDTH,
    borderRadius: 8,
    borderStyle: "dotted"
  },
  title: {
    padding: 4,
  },
  productImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
    height: 160,
  },
});

export default ProductsSearchScreen

