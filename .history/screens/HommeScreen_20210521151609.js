import React, { useState, useEffect } from 'react';
import { ActivityIndicator,View, FlatList,SafeAreaView } from 'react-native';

import Cate from '../components/elements/Categoris'
import API from '../components/config'
import PARAMS from '../config/contes';

//product card
import Item from '../components/ProductCard/ProductCard'

//declaration des variables 
const PRODUCTD_DISPLAY_LIMIT = 40;



function HomeScreen({ navigation }) {
  const [state, setState] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    API.get('products', {
      per_page: PRODUCTD_DISPLAY_LIMIT
    })
      .then(data => {
        setState(data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false))
  }, [])


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
    <SafeAreaView style={{flex:1}}>
      {isLoading ?<View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator size="large" color="#f77918" /></View>  : (
        <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                style.separator,
                highlighted && { marginLeft: 0 }
              ]}
            />
          ))
        }
          ListHeaderComponent={<Cate></Cate>}
          data={state}
          renderItem={renderItem}
          keyExtractor={item => (item.id).toString()}
          horizontal={false}
          numColumns={(PARAMS.SCREEN_WIDTH >= 600) ? 3 : 2}
          refreshing={true}
          removeClippedSubviews
         initialNumToRender={2} 
         maxToRenderPerBatch={1}
         onScrollEndDrag={() => console.log("end")}
        />
      )}
    </SafeAreaView>
  )
}
export default HomeScreen