import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Pressable } from 'react-native';
import Item from '../components/ProductCard/ProductCard';
import PARAMS from '../config/contes';
import { useSelector, useDispatch } from 'react-redux';
import { searchProductsAction } from '../redux/actions/products'
import SearchBar from "react-native-dynamic-search-bar";

import { searchProduct } from '../utils/backend/products';

function ProductsSearchScreen({ navigation }) {
  const [state, setState] = useState('')
  const [isloading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

   const dispatch = useDispatch();
   const products = useSelector(state => state.products.searchProducts);



  const [productsList, setProductsList] = useState([])

const searchProducts = async (search) => {
    try {
      setLoading(true)
      searchProduct(search).then(res => {
        setProductsList(res)
        dispatch(searchProductsAction(res))
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
    }
  }


  class RenderItem extends React.PureComponent {
    render() {
      const { item } = this.props;
      return (
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
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

<View style={{
  padding:10,
}}>
   <SearchBar
       fontColor="#c6c6c6"
       iconColor="#c6c6c6"
       shadowColor="#282828"
       cancelIconColor="#c6c6c6"
        placeholder="Rechercher un produit"
        onChangeText={(value) => setSearch(value)}
        value={search}
        onCancel={() => setSearch('')}
        onSubmitEditing={() =>{
           searchProducts(search)
           console.log(search)
        }}
      />
</View>
{/*empty productsList view*/}
{productsList.length === 0 && !isloading && (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }}>
    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#c6c6c6',
    }}>
      Aucun produit trouvé
    </Text>
  </View>
)}

{isloading ? (
  <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }}>
<ActivityIndicator size="large" color="#c6c6c6" />
  </View>
):(
   <FlatList
        data={(products != undefined) ? products : []}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={2}
        renderToHardwareTextureAndroid={true}
        refreshing={true}
      />
)

}
     

    </SafeAreaView>


  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ProductsSearchScreen