import React,{useEffect} from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import { useSelector } from 'react-redux';

export default function Panier() {

const panier = useSelector(state => state.cart.cart);

const total = panier.reduce((acc, item) => Number(acc)  + Number(item.prix), 0);


const panierPlain=()=>{
  return(
    <View style={{flex:1,backgroundColor:'#fff',padding:10}}>
    <ScrollView style={{
      position:"relative"
    }}>

  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        panier.map((item, index) => {
          return (
            <View key={index} style={{
               flexDirection: 'row', 
               padding: 5,
               borderBottomWidth:1,
               borderBottomStyle:'solid',
               borderBottomColor:'#d9d9d9',
               }}>
              <Image style={{ width: 100, height: 100,borderRadius:8 }} source={{ uri: item.url }} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text>{item.name}</Text>
                <Text>{item.prix}</Text>
              </View>
              <MaterialCommunityIcons name="delete" color="#f54242" size={20}/>
            </View>

          )
        })
      }
    </View>
    </ScrollView>
    <View style={{
    width:'100%',
    }}>
    <Text style={{
      fontSize:20,
      fontWeight:'bold',
    }}>Total : {total} fr</Text>
    </View>

    <View style={{
    width:'100%',
    height:50,
    marginTop:10,
    backgroundColor:'#4254f5',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    }}>
    <Text
    style={{
      color:'#fff',
      fontSize:16,
  
      
    }}
    >{<Icon name="checkmark" size={20} color="#fff"  />} Valider ma commande</Text>
    </View>
    </View>


  )
}


const emptyPanier=()=>{
  return(
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Votre panier est vide</Text>
    </View>)
}

  return (
  (panier.length>0)?panierPlain():emptyPanier()
  )
}



