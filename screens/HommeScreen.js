import React, { useState, useEffect,useRef } from 'react';
import { ActivityIndicator, View,SafeAreaView,Text,TouchableOpacity } from 'react-native';

import Cate from '../components/elements/Categoris'
//product card
import { getAllProducts } from '../utils/backend/products';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/products';
import ProductsListe from '../components/ProductCard/ProductsListe';
import { useNavigation } from '@react-navigation/native';




 


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



  const SeeMoreButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('allProducts')
        }}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#000",
        padding: 10,
      }}>
        <Text style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 15,
          marginRight: 10
        }}>Voir plus</Text>
      </TouchableOpacity>
    )
  }
  

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
      footerComponent={<SeeMoreButton/>}
      />
        )}
    </SafeAreaView>
  )
}
export default HomeScreen