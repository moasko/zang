import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Image,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const LogoTitle = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent:"space-between", alignItems: "center" }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../assets/48x48.png')}
      />
      <Text style={{ color: "#000", fontSize: 15, marginLeft: 6, fontWeight: "bold" }}>Zangochap</Text>
      <TouchableOpacity style={{
        backgroundColor: "#ebebeb",
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={() => navigation.navigate('roductsSearchScreen')}>
        
        <MaterialCommunityIcons name="magnify" color={"#000"} size={20} />
      </TouchableOpacity>
    </View>

  );
}

export default LogoTitle
