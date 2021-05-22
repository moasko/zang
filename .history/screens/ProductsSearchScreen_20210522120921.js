import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Image, Pressable } from 'react-native';
import API from '../components/config'
import SearchBar from '../components/SearchBar/SearchBar';




//declaration des variables 
let SCREEN_WIDTH = Dimensions.get('window').width
const BORDER_WIDTH = 1.5;
const PRODUCTD_DISPLAY_LIMIT = 2;
const DEVIS = "CFA";
const IMG_PLACEHOLDER = "https://zangochap.ci/wp-content/uploads/woocommerce-placeholder.png";





const Item = ({ id, url, name, prix, categories, nav, description }) => (
  <Pressable
    style={styles.item}
    onPress={() => nav.navigate('SingleProduct', {
      id: id,
      img: url,
      name: name,
      prix: prix,
      categories: categories,
      description: description
    })} >
    <Image
      style={styles.productImage}
      source={{
        uri: url,
      }}
    />

    <View style={styles.title}>
      <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
      <Text numberOfLines={1} style={{ fontSize: 15 }}>{name}</Text>
      <Text style={{ color: "#e84500", fontSize: 18, fontWeight: "bold" }}>{prix} {DEVIS}</Text>
    </View>
  </Pressable>
);


function ProductsSearchScreen({ navigation }) {
  const [state, setState] = useState('')
  const [isloading, setLoading] = useState(true)

  const [search, setSearch] = useState('')


  function updateSearch(value="a") {
   setSearch(value)
}

  useEffect(() => {
    API.get('products', {
      search: search,
      per_page: PRODUCTD_DISPLAY_LIMIT
    })
      .then(data => {
        setState(data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));

  }, [])



  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      nav={navigation}
      url={(item.images[0] != undefined) ? item.images[0].src : IMG_PLACEHOLDER}
      name={item.name || "Aucun nom"} prix={item.sale_price || "00"}
      description={item.short_description}
      categories={(item.categories[0] != undefined) ? item.categories[0].name : "non classé"}
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={search}
        updateSearch={updateSearch}
      />

      {isloading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
        <FlatList
          data={state}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />)}

    </SafeAreaView>


  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    flex: 1,
    flexWrap: "wrap",
    margin: 5,
    height: 250,
    width: (SCREEN_WIDTH / 2),
    borderColor: "#f77918",
    borderEndWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,
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