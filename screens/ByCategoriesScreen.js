import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Text, View, FlatList, SafeAreaView } from 'react-native';

import { setProductsByCategorie } from '../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../utils/backend/products';
import ProductsListe from '../components/ProductCard/ProductsListe';
import Pagination from '../components/elements/Pagination';


function ByCategoriesScreen({ navigation, route }) {
  const [state, setState] = useState('')
  const [isloading, setLoading] = useState(true)
const [page , setPage] = useState(1)
  const { id,title } = route.params

  const dispatch = useDispatch();

  const catProducts = useSelector(state => state.products.productsByCategorie)


  let vue = useRef(true);
  useEffect(() => {
    vue.current = true;
    setLoading(true)
    getProductsByCategory(id,page)
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
  }, [catProducts === [],page])

const CategoryListeHeader = (category) => {
return(
  <View style={{
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin:20
  }}>
    <Text style={{fontSize:20,fontWeight:'bold',textAlign:"center",color:'#000'}}>{title}</Text>
  </View>
)
}
  



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isloading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
        <ProductsListe 
         data={catProducts}
         headerComponent={CategoryListeHeader}
         footerComponent={<Pagination
           page={page} 
           setNext={()=>{
              setPage(page+1)
            }}
            setPrev={()=>{
              setPage(page-1)
            }
            }
            />}
          />
      )}
    </SafeAreaView>

  )

}


export default ByCategoriesScreen