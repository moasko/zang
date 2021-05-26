import React,{useState} from 'react';
import { View,TextInput,Text,Image } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
    const [text, onChangeText] = React.useState("Useless Text");
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

export default firstLog;