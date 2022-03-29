//product card
import React, { useState, useEffect,useRef } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PARAMS from '../../config/contes';
import { setProducts } from '../../redux/actions/products';
import { getAllProducts } from '../../utils/backend/products';
import Item from './ProductCard';



const ProductsListe = ({}) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limite, setLimite] = useState(20)
    const [page, setPage] = useState(1)
  
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)
  
  let vue = useRef(true);
    useEffect(() => {
      vue.current = true;
      setLoading(true)
      getAllProducts(page,limite)
        .then(res => {
          if (vue) {
            dispatch(setProducts(res))
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
    }, [products === null,limite])
  
  
  
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
      <View>
        {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
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
               keyExtractor={item => (item.id).toString()}
               horizontal={false}
               numColumns={(PARAMS.SCREEN_WIDTH >= 600) ? 3 : 2}
               refreshing={true}
               removeClippedSubviews
               initialNumToRender={2}
               maxToRenderPerBatch={1}
               onEndReachedThreshold={1}
               scrollEventThrottle={400}
               onEndReached={({ distanceFromEnd }) => {
       console.log("limite",limite)
               }}
             />
        )}
      </View>
    )
  }
  export default ProductsListe