import React, { useState } from 'react';
import { View, Pressable, Text, Dimensions, StyleSheet, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width
const AddToCartBtn = ({ id, permalink }) => {

    const initiateWhatsAppSMS = () => {
        const PhoneNumber = "+2250584472464"
        const text = `
        Salut Zangochap je souhaite passer une commande de ce produit
    %0a%0a*Nom du produit* : name
    %0a*Prix*:7000
    %0a*Lien du produit*:${permalink}`

        let url =
            'whatsapp://send?text=' + text + '&phone=' + PhoneNumber;
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    };
    return (

        <Pressable onPress={() => initiateWhatsAppSMS()} >
            <View style={{
                width: (SCREEN_WIDTH / 2),
                backgroundColor: 'green'
            }}>
                <Text style={styles.btnText}> <MaterialCommunityIcons name="basket" color={"#fff"} size={20} /> WhatsApp</Text>
            </View>
        </Pressable>

    )


}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center",
        padding: 15
    }
})

export default AddToCartBtn;