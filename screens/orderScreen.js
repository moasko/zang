import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Dimensions, ActivityIndicator, Pressable,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../components/config';
import { resetCart } from '../redux/actions/products';
import { useDispatch } from 'react-redux';


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const myIcon = <Icon name="cart-outline" size={30} color="#fff" />;
const checkmark = <Icon name="checkmark" size={40} color="green"  />;
function GetDate(){
  let d = new Date()
  let h = d.getHours()
return h>=17? (<Text style={{padding:15 ,fontWeight:"bold",textAlign:"center"}}>une commercial va prendre contact avec vous d'he demain a partir de 8H</Text>):(<Text>une commercial va prendre contact avec vous dans moin de 2 minuts</Text>)
}

function Loading() {
  return (
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




function Loaded() {
  const navigation = useNavigation();
  return (
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
        padding:15,
        width: "85%",
        height: 250,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Text style={{color:"#696969",marginBottom: 17, fontSize:20, fontWeight: "bold",textAlign:"center" }}>Votre Commande a bien été valider</Text>
        <Text>{checkmark}</Text>
       <GetDate/>
        <TouchableOpacity style={styles.customBtn} onPress={()=>navigation.navigate('home')} >
          <Text style={{color:"#fff",fontSize:15,textAlign:"center"}}>continué</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const OrderScreen = ({ route }) => {
  let {order} = route.params
  const [code, setCode] = useState(null)
  const [nom, setNom] = useState(null)
  const [prenom, setPrenom] = useState(null)
  const [tel1, setTel1] = useState(null)
  const [tel2, setTel2] = useState(null)
  const [lieu, setLieu] = useState(null)

  const [respons, setRespons] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [isLoaded,setLoaded]=useState(false)

  const dispatch = useDispatch()

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
      email: "",
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
        method_title: "Flat Rate",
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
        console.log(error.response.data);
      }).finally(() => {
        setLoading(false)
        setLoaded(true)
        dispatch(resetCart())
      })
  }


  return (
    <View style={{ padding: 5}}>
      {isLoading ? <Loading/> : null} 
      {isLoaded ? <Loaded/>:null}
      <ScrollView>
        <Text style={styles.title}>VALIDATION DE COMMANDE</Text>
        <View>
          <View style={{ padding: 10, marginBottom: 20,backgroundColor:"#039181" ,borderRadius:10}}>
            <Text style={{ textAlign: "center" }}>Avez vous un code promo ?</Text>
            <Text style={{color:"#ffffff",textAlign:"center",marginBottom:10,marginTop:10}}>vous n'etre pas abliger de remprire ce champ si vous n'avez pas de code coupon </Text>
            <TextInput style={styles.inputStyle} placeholder="Votre code promo" onChangeText={setCode} value={code} />
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

 <Pressable onPress={Post} style={{alignItems:"flex-end"}}>
          <View style={{
            width: 150,
            height: 60,
            padding: 10,
            borderRadius: 50,
            backgroundColor: "#e76300",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{
              fontSize: 22,
              textAlign: "center",
              color: "#fff",
            }}>{myIcon}</Text>
          </View>
        </Pressable>
      </ScrollView>

       

    </View>
  )

}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dbdbdb"
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },
  customBtn:{
    backgroundColor:"#3880d1",
    padding:15,
    width:"100%",
    borderRadius:7
  }
})

export default OrderScreen;