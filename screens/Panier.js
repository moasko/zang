import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView,Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteToCart,setCartItemQuantity } from '../redux/actions/products';
import { useNavigation } from '@react-navigation/native';

//redux
import { useSelector, useDispatch } from 'react-redux';
export default function Panier({ route }) {

  const panier = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const total = panier.reduce((acc, item) => Number(acc) + Number(item.prix*item.qt), 0);

  const order = panier.map(item => {
    return ({
      product_id: item.id,
      quantity: item.qt,
    })
  }); 



  const navigation = useNavigation();
  
  const handleDelete = (id) => {
    deleteToCart({ id });
    dispatch(deleteToCart({ id }));
  }

  const QtCompterIncremant = (id) => {
    let qt = panier.find(item => item.id === id);
    qt.qt = qt.qt + 1;
    dispatch(setCartItemQuantity(qt));
  }

  const QtCompterDecremant = (id) => {
    let qt = panier.find(item => item.id === id);
    if (qt.qt < 2) {
      qt.qt = 1
    } else {
      qt.qt = qt.qt - 1;
      dispatch(setCartItemQuantity(qt));
    }
  }



  const panierPlain = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
        <ScrollView style={{
          position: "relative"
        }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              panier.map((item, index) => {
                return (
                  <View key={index} style={{
                    flexDirection: 'row',
                    padding: 5,
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#d9d9d9',
                  }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 8 }} source={{ uri: item.url }} />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={{fontSize:16,fontWeight:"bold"}}>{item.name}</Text>
                      <Text style={{
                        fontSize: 14,
                      }}>PUHT : {item.prix} fr</Text>
                      <Text style={{
                        fontSize: 14,
                      }}>sous total : {item.prix * item.qt} fr</Text>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <MaterialCommunityIcons onPress={() => QtCompterDecremant(item.id)} name="minus" size={20} color="#000" style={{
                            borderRadius: 5,
                            marginLeft: 5,
                            color: "#fff",
                            fontSize: 20,
                            backgroundColor: 'orange'
                          }} />
                          <Text style={{ marginLeft: 5 }}>{item.qt}</Text>
                          <MaterialCommunityIcons onPress={() => QtCompterIncremant(item.id)} name="plus" size={20} color="#000" style={{
                            borderRadius: 5,
                            marginLeft: 5,
                            color: "#fff",
                            fontSize: 20,
                            backgroundColor: 'orange'
                          }} />
                        </View>
                      </View>

                    </View>
                    <View>
                      <MaterialCommunityIcons onPress={() => handleDelete(item.id)} name="delete" color="#f54242" size={20} />
                    </View>
                  </View>

                )
              })
            }
          </View>
        </ScrollView>
        <View style={{
          width: '100%',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>Total : {total} fr</Text>
        </View>

        <Pressable onPress={() => navigation.navigate('order',{order})}  style={{
          width: '100%',
          height: 50,
          marginTop: 10,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
            }}
          >{<Icon name="checkmark" size={20} color="#fff" />} Valider ma commande</Text>
        </Pressable>
      </View>


    )
  }


  const emptyPanier = () => {
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text> Votre panier est vide</Text>
      </View>)
  }

  return (
    (panier.length > 0) ? panierPlain() : emptyPanier()
  )
}



