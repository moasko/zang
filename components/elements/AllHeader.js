import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import { useSelector } from 'react-redux';

const AllHeader = () => {

    const navigation = useNavigation();
    const cart = useSelector(state => state.cart.cart);

    return (
        <View>
            <TouchableOpacity style={{
                alignSelf: "flex-end",
                backgroundColor: "#ebebeb",
                borderRadius: 50,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center"
            }}
                onPress={() => navigation.push("panier")}>
                <Badge value={cart.length} status="error" containerStyle={{ position: "absolute", top: -5, right: -5 }} />
                <MaterialCommunityIcons name="basket" color={"#000"} size={20} />
            </TouchableOpacity>
        </View>


    )
}

export default AllHeader