import React, { useState, useEffect,useRef } from 'react';
import { ActivityIndicator, View,SafeAreaView } from 'react-native';

import Cate from '../components/elements/Categoris'
//product card
import Modale from '../components/elements/Modale'
import { getAllProducts } from '../utils/backend/products';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/products';
import ProductsListe from '../components/ProductCard/ProductsListe';


//declaration des variables 




function HomeScreen({ navigation }) {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#f77918" /></View> )
        :(
      <ProductsListe
      data={products}
      listeLimites={limite}
      headerComponent={<Cate/>}
      />
        )}
      <Modale />
    </SafeAreaView>
  )
}
export default HomeScreen