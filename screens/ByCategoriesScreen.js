import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Text, View, FlatList, SafeAreaView } from 'react-native';
import API from '../components/config'
import PARAMS from '../config/contes';
import Item from '../components/ProductCard/ProductCard'


import { setProductsByCategorie } from '../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../utils/backend/products';
import ProductsListe from '../components/ProductCard/ProductsListe';


function ByCategoriesScreen({ navigation, route }) {
  const [state, setState] = useState('')
  const [isloading, setLoading] = useState(true)

  const { id } = route.params

  const dispatch = useDispatch();

  const catProducts = useSelector(state => state.products.productsByCategorie)


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
  }, [catProducts === []])



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isloading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
        <ProductsListe  data={catProducts} />
      )}
    </SafeAreaView>

  )

}


export default ByCategoriesScreen