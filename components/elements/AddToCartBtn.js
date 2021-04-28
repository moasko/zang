import React, { useState } from 'react';
import { View, Pressable, Text, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const AddToCartBtn = ({id}) => {
     const [idds, setIdds] = useState("")
    const [bac,setBac]= useState([])

    const hundleAdd=(gg)=>{
       let pr =  new Promise((resolved,rejected)=>{

        })
        setIdds(gg)
        setBac([...bac,idds])
        console.log(bac)
    }
    return (
        <Pressable
            onPress={()=>hundleAdd(id)}
        >
            <View style={{
                width: (SCREEN_WIDTH / 2),
                backgroundColor: '#e76300'
            }}>
                <Text style={styles.btnText}>jouter au panier</Text>
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