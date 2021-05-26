import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Image, Pressable } from 'react-native';
import API from '../components/config'
import SearchBar from '../components/SearchBar/SearchBar';
import Item from '../components/ProductCard/ProductCard';


function ProductsSearchScreen({ navigation }) {
  const [state, setState] = useState('')
  const [isloading, setLoading] = useState(true)
  const [search, setSearch] = useState('')


  function updateSearch(value) {
   setSearch(value)
}

  useEffect(() => {
    API.get('products', {
      search: search,
      per_page: 40
    })
      .then(data => {
        setState(data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));

  }, [search])



  const renderItem = ({ item }) => (
    <Item
      key={item.id}
      id={item.id}
      nav={navigation}
      url={(item.images[0] != undefined) ? item.images[0].src : PARAMS.PROUCTS_IMG_PLACEHOLDER}
      name={item.name || "Aucun nom"}
      prix={item.sale_price || "00"}
      preprix={item.regular_price}
      description={item.short_description}
      categories={(item.categories[0] != undefined) ? item.categories[0].name : "non classé"}
      permalink={item.permalink}
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
  }
});

export default ProductsSearchScreen