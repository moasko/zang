import React,{useState} from 'react';
import { View,TextInput,Text,Image,StyleSheet } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
    const [number, onChangeNumber] = React.useState(null);
  return <View style={{flex:1,alignItems:"center"}}>
      <Image 
      style={{width:300,height:200}}
    source={require('../assets/welc.png')}
      />
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
        shadowColor: '#470000',
        shadowOffset: {width: 10, height: 0},
        shadowOpacity: 0.5,
        elevation: 2,

    }
})
export default firstLog;