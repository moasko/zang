import React, { useState } from 'react';
import { StyleSheet, View,Dimensions, Text,Image } from 'react-native'


const PHONE_1 = "+225 0584472464"
const SCREEN_WIDTH = Dimensions.get('screen').width
function ContactUsScreen() {

    return (
        <View style={{
            padding:20,
            flex:1,
            justifyContent:'space-around',
            alignItems:'center'

        }}>
{/**application name*/}
            <Text style={{
                fontSize:30,
                fontWeight:'bold',
                color:'#000'
            }}>
                Zangochap
            </Text>


            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                color:'gray'
            }}>
                version 1.0
            </Text>
{/**application name*/}
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:20
            }}>
               
<Image source={require('../assets/logo.png')} style={{
    width:150,
    height:150
}}/>

{/**copyright */}
      
           
                </View>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                }}>
                    Tout droits réservés
                </Text>

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
        borderRadius:10,
               padding: 10,
        backgroundColor: "orange",
        width: "100%",
        marginBottom: 1,
    },
    text:{
        color:"#fff",
        fontSize:16,
    }
})

export default ContactUsScreen