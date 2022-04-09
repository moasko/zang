import React from 'react';
import { View, Pressable, Text, StyleSheet, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PARAMS from '../../config/contes'

const AddToCartBtn = ({ id, permalink, prix, name, img }) => {

    const initiateWhatsAppSMS = () => {
        const PhoneNumber = "+2250584472464"
        const text = `
        Salut Zangochap je souhaite passer une commande de ce produit
    %0a*Nom du produit* : ${name}
    %0a*Prix*:${prix} ${PARAMS.DEVIS}
    %0a*Produit sur le site*:${permalink}`

        let url =
            'whatsapp://send?text=' + text + '&phone=' + PhoneNumber;
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Assurez-vous que Whatsapp est installé sur votre appareil');
            });
    };
    return (

        <Pressable onPress={() => initiateWhatsAppSMS()} >
            <View style={{
             justifyContent: "center",
             alignItems: "center",
             width: 50,
             height: 50,
             borderRadius: 50,
            backgroundColor: '#0ac352'
            }}>
                <Text style={styles.btnText}> <MaterialCommunityIcons name="whatsapp" color={"#fff"} size={20} /></Text>
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
        padding: 9
    }
})

export default AddToCartBtn;