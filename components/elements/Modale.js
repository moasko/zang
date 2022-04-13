import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from "react-native";

  
const Modale = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ff6200" }}>
                    <Text style={{ color: "#fff", fontSize: 25, fontWeight: "700" }}>BIENVENUE CHEZ VOUS </Text>
                    <Text style={{ width: "90%", borderRadius: 6, backgroundColor: "#00000027", textAlign: "center", color: "#fff", fontSize: 17, padding: 10 }}>Veillez entre votre nom SVP et recevez un cadeau après votre deuxième achat sur notre application</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Votre nom ici"
                        placeholderTextColor={"#d6d6d6"}
                    />
                    <TouchableOpacity onPress={async () => {
                        setModalVisible(!modalVisible)
                 
                    }} style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ width: "90%", backgroundColor: "#fff", padding: 18, borderRadius: 5, marginTop: 35 }}>
                            <Text style={{ color: "#ff6200", fontSize: 18, textAlign: "center" }}>RECEVOIR MON CADEAU</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 35,
        width: 250,
        height: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    input: {
        borderColor: "#fff",
        borderWidth: 1,
        marginTop: 30,
        padding: 18,
        width: 300,
        borderRadius: 6,
        shadowColor: "#fffff0",
        shadowOffset: {
            width: 0,
            height: 1,
        }
    }

});

export default Modale;