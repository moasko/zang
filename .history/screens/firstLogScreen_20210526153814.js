import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';

// import { Container } from './styles';

const firstLog = () => {
    const [number, onChangeNumber] = React.useState(null);
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ff6200" }}>
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "700" }}>BIENVENUE CHEZ VOUS </Text>
        <Image
            style={{
                height: 100,
                width: 200,
                resizeMode: 'stretch'
            }}
            source={require('../assets/logo_zangochapB.png')}
        />
        <Text style={{ textAlign: "center", color: "#fff" }}>veillez entre votre nom SVP et recevez un cadeau apres votre dexieme achat sur notre application</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="entrez votre nom"
            placeholderTextColor={"#d6d6d6"}
            
        />

        <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "90%", backgroundColor: "#fff", padding: 18, borderRadius: 5, marginTop: 35 }}>
                <Text style={{color:"#ff6200",fontSize:18}}>Valider</Text>
            </View>
        </TouchableOpacity>
    </View>;
}
const styles = StyleSheet.create({
    input: {
        borderColor:"#fff",
        borderWidth:1,
        marginTop: 40,
        padding: 18,
        width: 300,
        borderRadius: 6,
        shadowColor: "#fffff0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    }
})
export default firstLog;