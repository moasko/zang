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
       style={}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
  </View>;
}
const styles = StyleSheet.create({
    input:{
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,

    }
})
export default firstLog;