import React,{useState} from 'react';
import { View,TextInput,Text,Image,StyleSheet } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';

// import { Container } from './styles';

const firstLog = () => {
    const [number, onChangeNumber] = React.useState(null);
  return <View style={{flex:1,alignItems:"center",justifyContent:"center", backgroundColor:"#ff5a00"}}>
  <Text style={{color:"#fff",fontSize:25,fontWeight:"700"}}>BIENVENUE CHEZ VOUS </Text>
<Image
style={{
    height:100,
    width:200,
    resizeMode:'stretch'
}}
source={require('../assets/logo_zangochapB.png')}
/>
  <Text style={{textAlign"center"}}>veillez entre votre nom et recevez un cadeau apres votre dexieme achat sur notre application</Text>
   <TextInput
       style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="entrez votre nom"
      />
  </View>;
}
const styles = StyleSheet.create({
    input:{
        padding:6,
        width:300,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

    }
})
export default firstLog;