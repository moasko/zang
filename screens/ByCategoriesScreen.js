import React, { useState, useEffect,useRef } from 'react';
import { ActivityIndicator,Text, View, FlatList, SafeAreaView } from 'react-native';
import API from '../components/config'
import PARAMS from '../config/contes';
import Item from '../components/ProductCard/ProductCard'

import { setProductsByCategorie } from '../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../utils/backend/products';

function ByCategoriesScreen({ navigation, route }) {
    const [state, setState] = useState('')
    const [isloading, setLoading] = useState(true)
    const { id } = route.params

    const dispatch = useDispatch();

    const products = useSelector(state => state.products.productsByCategorie)




let vue = useRef(true);
  useEffect(() => {
    vue.current = true;
    setLoading(true)
    getProductsByCategory(id)     
     .then(res => {
        if (vue) {
          dispatch(setProductsByCategorie(res.data))
        }
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      vue.current = false;
    }
  }, [products === null])





    const renderItem = ({ item }) => {
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
        )
      };
    

    return (
        <SafeAreaView style={{ flex: 1 }}>
        {isloading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
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
               data={products}
               renderItem={renderItem}
               keyExtractor={item => (item.id)}
               horizontal={false}
               numColumns={(PARAMS.SCREEN_WIDTH >= 600) ? 3 : 2}
               refreshing={true}
               removeClippedSubviews
               initialNumToRender={2}
               maxToRenderPerBatch={1}
               onEndReachedThreshold={1}
               scrollEventThrottle={400}
             />
        )}
      </SafeAreaView>

    )

}


export default ByCategoriesScreen