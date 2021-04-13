import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Pressable } from 'react-native';
import CachedImage from 'react-native-expo-cached-image';

import Cate from '../components/elements/Categoris'
import API from '../components/config'


//declaration des variables 
const SCREEN_WIDTH = Dimensions.get('window').width
const PROCUVTS_CARDES_BORDER_WIDTH = 1.5;
const PRODUCTD_DISPLAY_LIMIT = 24;
const DEVIS = "CFA";
const PROUCTS_IMG_PLACEHOLDER = "https://zangochap.ci/wp-content/uploads/woocommerce-placeholder.png";




const Item = ({ id, url, name, prix, preprix, categories, nav, description }) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => nav.navigate('SingleProduct', { id: id, img: url, name: name, prix: prix, categories: categories, description: description })} >

      <CachedImage style={styles.productImage} source={{ uri: url }} />

      <View style={styles.title}>
        <Text style={{ fontSize: 10, color: "#6e6e6e" }}>{categories}</Text>
        <Text numberOfLines={1} style={{ fontSize: 15 }}>{name}</Text>
        <Text style={{ color: "#ffd5b8", fontSize: 10, fontWeight: "bold", fontStyle: "italic" }}>{preprix} {DEVIS}</Text>
        <Text style={{ color: "#e84500", fontSize: 15, fontWeight: "bold" }}>{prix} {DEVIS}</Text>
      </View>
    </Pressable>
  );
}


function HomeScreen({ navigation }) {
  const [state, setState] = useState('')
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    API.get('products', {
      per_page: PRODUCTD_DISPLAY_LIMIT
    })
      .then(data => {
        setState(data)
        console.log(state)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false))
  }, [])




  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      nav={navigation}
      url={(item.images[0] != undefined) ? item.images[0].src : PROUCTS_IMG_PLACEHOLDER}
      name={item.name || "Aucun nom"}
      prix={item.sale_price || "00"}
      preprix={item.regular_price}
      description={item.short_description}
      categories={(item.categories[0] != undefined) ? item.categories[0].name : "non classé"}
    />
  );

  return (

    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
        <FlatList
          ListHeaderComponent={<Cate></Cate>}
          data={state}
          renderItem={renderItem}
          keyExtractor={item => (item.id).toString()}
          horizontal={false}
          numColumns={(SCREEN_WIDTH >= 600) ? 3 : 2}
          removeClippedSubviews={true}
        />
      )}
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
    height: 260,
    width: (SCREEN_WIDTH / 2),
    borderColor: "#f77918",
    borderEndWidth: PROCUVTS_CARDES_BORDER_WIDTH,
    borderLeftWidth: PROCUVTS_CARDES_BORDER_WIDTH,
    borderBottomWidth: PROCUVTS_CARDES_BORDER_WIDTH,
    borderTopWidth: PROCUVTS_CARDES_BORDER_WIDTH,
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

export default HomeScreen