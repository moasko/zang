import React from 'react'
import {Text,View,Image} from 'react-native'
const LogoTitle = ()=> {
    return (
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../assets/48x48.png')}
        />
        <Text style={{ color: "#000", fontSize: 15, marginLeft: 6, fontWeight: "bold" }}>Zangochap</Text>
      </View>
  
    );
  }

  export default LogoTitle