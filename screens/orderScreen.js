import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import API from '../components/config';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


function Loading(){
  return(
    <View style={{
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT - 80,
      position: "absolute",
      backgroundColor: "rgba(52, 52, 52, 0.8)",
      zIndex: 56,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <View style={{
        width: "70%",
        height: 150,
        backgroundColor: "rgba(25, 25, 25, 0.8)",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Text style={{ color: "#fff", marginBottom: 25, fontWeight: "bold" }}>Commande en cour de validation</Text>
        <ActivityIndicator size="large" color="#f77918" />
      </View>
    </View>
  )
}

const OrderScreen = ({ route }) => {
  let { id } = route.params
  const [code, setCode] = useState(id.toString())
  const [nom, setNom] = useState(null)
  const [prenom, setPrenom] = useState(null)
  const [tel1, setTel1] = useState(null)
  const [tel2, setTel2] = useState(null)
  const [lieu, setLieu] = useState(null)
  const [respons,setRespons] =useState('')
  const [isLoading, setLoading] = useState(false);

  let data = {
    payment_method: "bacs",
    payment_method_title: "Paiement à la livraison",
    set_paid: true,
    billing: {
      first_name: nom,
      last_name: prenom,
      address_1: "",
      address_2: "",
      city: lieu,
      state: "CI",
      postcode: "",
      country: "CI",
      email: "moasko@gmail.com",
      phone: tel1
    },
    shipping: {
      first_name: nom,
      last_name: prenom,
      address_1: "",
      address_2: "",
      city: lieu,
      state: "AB",
      postcode: "94103",
      country: "CI"
    },
    line_items: [
      {
        product_id: id,
        quantity: 1
      }
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00"
      }
    ]
  }

  const Post = () => {
    API.post('orders', data)
      .then(response => {
        setRespons(response)
      })
      .catch(error => {
        console.log(error.response.data);
      }).finally(()=>setLoading(false))
  }


  return (
    <View style={{ padding: 5 }}>
      {isLoading ?<Loading></Loading>:null}
      <ScrollView>
        <Text style={styles.title}>VALIDATION DE COMMANDE</Text>
        <View>
          <View style={{ padding: 10, borderWidth: 2, borderColor: "red", marginBottom: 20 }}>
            <Text style={{ textAlign: "center" }}>Avez vous un code promo ?</Text>
            <TextInput style={styles.inputStyle} placeholder="Lieu de livraison" onChangeText={setCode} value={code} />
          </View>

          <Text>Nom</Text>
          <TextInput style={styles.inputStyle} placeholder="Nom" onChangeText={setNom} value={nom} />
          <Text>Prenom</Text>
          <TextInput style={styles.inputStyle} placeholder="Prenom" onChangeText={setPrenom} value={prenom} />
          <Text>Téléphone 1</Text>
          <TextInput keyboardType="number-pad" dataDetectorTypes="phoneNumber" autoCompleteType="tel" style={styles.inputStyle} placeholder="Téléphone 1" onChangeText={setTel1} value={tel1} />
          <Text>Téléphone 2</Text>
          <TextInput keyboardType="number-pad" dataDetectorTypes="phoneNumber" style={styles.inputStyle} placeholder="Téléphone 2" onChangeText={setTel2} value={tel2} />
          <Text>Lieu de livraison</Text>
          <TextInput style={styles.inputStyle} placeholder="Lieu de livraison" onChangeText={setLieu} value={lieu} />


        </View>
        <Button onPress={Post} title="valider la commande" />
      </ScrollView>


    </View>
  )

}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#dbdbdb"
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  }
})

export default OrderScreen;