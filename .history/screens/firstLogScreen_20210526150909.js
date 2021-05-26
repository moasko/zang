import React,{useState} from 'react';
import { View,TextInput,Text,Image,StyleSheet } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
    const [number, onChangeNumber] = React.useState(null);
  return <View style={{flex:1,alignItems:"center",justifyContent:"center", backgroundColor:"#ff5a00"}}>
  <Text>BIENVENUE CHEZ VOUS </Text>
<Image
resizeMode={cover}
style={{
    height:200,
    width:120
}}
source={require('../assets/logo_zangochapB.png')}
/>
  <Text>veillez entre votre nom</Text>
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