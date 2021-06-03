import React, { useState, useEffect } from 'react';
import {ActivityIndicator, View, FlatList, SafeAreaView} from 'react-native';
import API from '../components/config'
import PARAMS from '../config/contes';
import Item from '../components/ProductCard/ProductCard'


function ByCategoriesScreen({ navigation, route }) {
  const [state, setState] = useState('')
  const [isloading,setLoading] = useState(true)
  const { id } = route.params

  useEffect(() => {
    let fermer = false;
    const sync = async()=>{
      try{
        if(!fermer){
              API.get('products', {
      category: id.toString()
    })
      .then(data => {
        setState(data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(()=>setLoading(false));
        }
      }catch(e){
        if(!fermer){
          throw e
        }
      }
    }
    sync();

    return ()=>{
      fermer = true;
    }

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
    {isloading ?<View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator size="large" color="#f77918" /></View>  : (
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

export default ByCategoriesScreen