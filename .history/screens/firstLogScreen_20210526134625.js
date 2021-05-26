import React from 'react';
import { View,TextInput,Text,Image } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
  return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image 
    source={require('../assets/welc.png')}
      />
  </View>;
}

export default firstLog;