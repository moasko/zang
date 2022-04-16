import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import { useSelector } from 'react-redux';

const AllHeader = ({title}) => {

    const navigation = useNavigation();
    const cart = useSelector(state => state.cart.cart);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        }}>
            <Text style={{
                textTransform: 'capitalize',
                color: '#000',
                fontSize: 20,
                textAlign: 'center',
                width: '70%',
                fontWeight: 'bold',
            }}>
            {title}
            </Text>
            
            <TouchableOpacity style={{
                alignSelf: "flex-end",
                backgroundColor: "#ebebeb",
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center"
            }}
                onPress={() => navigation.push("panier")}>
                <Badge value={cart.length} status="error" containerStyle={{ position: "absolute", top: -3, right: -3 }} />
                <MaterialCommunityIcons name="basket" color={"#000"} size={20} />
            </TouchableOpacity>
        </View>


    )
}

export default AllHeader