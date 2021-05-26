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
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
  </View>;
}
const styles = StyleSheet.create({
    input:{
        width:300,
        borderRadius:20,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        elevation: 5,

    }
})
export default firstLog;