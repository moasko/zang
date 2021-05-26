import React,{useState} from 'react';
import { View,TextInput,Text,Image } from 'react-native';

// import { Container } from './styles';

const firstLog = () => {
const [userName,setUserName]=useState(null)
  return <View style={{flex:1,alignItems:"center"}}>
      <Image 
      style={{width:300,height:200}}
    source={require('../assets/welc.png')}
      />
      <TextInput 
      value={userName}
      onTextInput={setUserName(userName)}
      />
  </View>;
}

export default firstLog;