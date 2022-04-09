import React, { useState } from 'react';
import { StyleSheet, View,Dimensions, Text } from 'react-native'


const PHONE_1 = "+225 0584472464"
const SCREEN_WIDTH = Dimensions.get('screen').width
function ContactUsScreen() {

    return (
        <View style={{
            padding:20
        }}>
            <View style={styles.constacts}>
                <Text style={styles.text}>+224 05758978</Text>
            </View>
            <View style={styles.constacts}>
                <Text  style={styles.text}>{PHONE_1}</Text>
            </View>
            <View style={styles.constacts}>
                <Text  style={styles.text}>zangochap@infi.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    constacts: {
        borderRadius:20,
               padding: 20,
        backgroundColor: "orange",
        width: "100%",
        marginBottom: 5,
    },
    text:{
        color:"#fff",
        fontSize:16,
    }
})

export default ContactUsScreen