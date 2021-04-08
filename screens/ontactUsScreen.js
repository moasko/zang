import React, { useState } from 'react';
import { StyleSheet, View,Dimensions, Text } from 'react-native'


const PHONE_1 = "+225 0584472464"
const SCREEN_WIDTH = Dimensions.get('screen').width
function ContactUsScreen() {

    return (
        <View>
            <View style={styles.constacts}>
                <Text>+224 05758978</Text>
            </View>
            <View style={styles.constacts}>
                <Text>{PHONE_1}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    constacts: {
        padding: 11,
        backgroundColor: "orange",
        width: SCREEN_WIDTH,
        marginBottom: 5

    }
})

export default ContactUsScreen