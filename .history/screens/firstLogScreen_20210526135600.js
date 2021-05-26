import React from 'react';
import { View,TextInput,Text,Image } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
  return <View style={{flex:1,alignItems:"center"}}>
      <Image 
      style={{width:300,height:200}}
    source={require('../assets/welc.png')}
      />
  </View>;
}

export default firstLog;