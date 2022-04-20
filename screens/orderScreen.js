import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, ActivityIndicator, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../components/config';
import { resetCart } from '../redux/actions/products';
import { useDispatch } from 'react-redux';


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const myIcon = <Icon name="cart-outline" size={30} color="#fff" />;
const checkmark = <Icon name="checkmark" size={40} color="green" />;


function Loading() {
  return (
    <View style={{
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      position: "absolute",
      bottom: 0,
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




function Loaded() {
  const navigation = useNavigation();
  return (
    <View style={{
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      bottom: 0,
      position: "absolute",
      backgroundColor: "#e9eef0",
      zIndex: 56,
      alignItems: "center",
      justifyContent: "center"
    }}>

      <View style={{
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <Text class={{
          padding: 15,
          width: "85%",
          height: 250,
          backgroundColor: "#fff",

        }}>{checkmark}</Text>
      </View>


      <View style={{
        padding: 15,
        width: "85%",
        height: 250,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Text style={{ color: "#696969", marginBottom: 17, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Merci!</Text>
        <Text style={{ color: "#696969", marginBottom: 17, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Votre Commande a bien été validé</Text>
        <Text style={{ color: "#000", marginBottom: 17, fontSize: 16, textAlign: "center" }}>
          Une commerciale vous contactera dans les plus brefs délais
        </Text>


        <TouchableOpacity style={styles.customBtn} onPress={() => navigation.navigate('home')} >
          <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>CONTINUER</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const OrderScreen = ({ route }) => {

  const [code, setCode] = useState(null)
  const [nom, setNom] = useState(null)
  const [prenom, setPrenom] = useState(null)
  const [tel1, setTel1] = useState(null)
  const [tel2, setTel2] = useState(null)
  const [lieu, setLieu] = useState(null)
  const [email, setEmail] = useState("")

  const [respons, setRespons] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false)

  const dispatch = useDispatch()


  const { order } = route.params


  let data = {
    payment_method: "bacs",
    payment_method_title: "Paiement à la livraison",
    set_paid: true,
    billing: {
      first_name: nom,
      last_name: prenom,
      address_1: tel2,
      address_2: "",
      city: lieu,
      state: "CI",
      postcode: "",
      country: "CI",
      email: email != "" ? email : "moasko.dev@gmail.com",
      phone: tel1
    },
    shipping: {
      first_name: nom,
      last_name: prenom,
      address_1: tel2,
      address_2: "",
      city: lieu,
      state: "AB",
      postcode: "",
      country: "CI"
    },
    line_items: order,
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "livraison",
        total: "1000"
      }
    ]
  }

  const Post = () => {
    setLoading(true)
    API.post('orders', data)
      .then(response => {
        setRespons(response)
      })
      .catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
        setLoaded(true)
        dispatch(resetCart())

      })
  }


  return (
    <View style={{ padding: 10 }}>
      {isLoading ? <Loading /> : null}
      {isLoaded ? <Loaded /> : null}
      <ScrollView>
        <Text style={styles.title}>VALIDATION DE COMMANDE</Text>
        <View>
          <View style={{ padding: 10, marginBottom: 20, backgroundColor: "#039181", borderRadius: 10 }}>
            <Text style={{ textAlign: "center" }}>Avez vous un code promo ?</Text>
            <Text style={{ color: "#ffffff", textAlign: "center", marginBottom: 10, marginTop: 10 }}>Vous n'êtes pas obligé de remplir ce champ si vous n'avez pas de code promo. </Text>
            <TextInput style={styles.inputStyle} placeholder="Votre code promo" onChangeText={setCode} value={code} />
          </View>

          <Text style={styles.inputLabel}>Nom</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Votre Nom"
            onChangeText={setNom}
            value={nom}
          />

          <Text style={styles.inputLabel}>Prenom</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Votre Prenom"
            onChangeText={setPrenom}
            value={prenom}
          />


          <Text style={styles.inputLabel}>Téléphone 1</Text>
          <TextInput
            keyboardType="number-pad"
            dataDetectorTypes="phoneNumber"
            autoCompleteType="tel"
            style={styles.inputStyle}
            placeholder="Telephone Principal"
            onChangeText={setTel1}
            value={tel1}
          />

          <Text style={styles.inputLabel}>Téléphone 2 ( facultatif )</Text>
          <TextInput
            keyboardType="number-pad"
            dataDetectorTypes="phoneNumber"
            style={styles.inputStyle}
            placeholder="Un deuxième téléphone"
            onChangeText={setTel2}
            value={tel2}
          />

          <Text style={styles.inputLabel}>Lieu de livraison</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Votre Lieu de livraison"
            onChangeText={setLieu}
            value={lieu}
          />




        </View>

        <Pressable onPress={() => {
          Post()
        }
        } style={{ alignItems: "flex-end" }}>
          <View style={{
            width: "100%",
            backgroundColor: "#039181",
            height: 50,
            borderRadius: 10,
            padding: 5,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{
              fontSize: 22,
              textAlign: "center",
              color: "#fff",
            }}>
              <Text style={{ fontWeight: "bold" }}>VALIDER</Text>
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ebebeb",
    backgroundColor: "#fff",
    borderRadius: 5
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },
  customBtn: {
    backgroundColor: "#3880d1",
    padding: 15,
    width: "100%",
    borderRadius: 7
  },
  inputLabel: {
    marginLeft: 14,
    color: "gray",
    fontSize: 11
  },
  orderValidationMessage: {
    color: "red",
    fontSize: 12,
    marginLeft: 14
  },
  orderValidationMessageSuccess: {
    color: "green",
    fontSize: 12,
    marginLeft: 14
  }
  ,


})

export default OrderScreen;