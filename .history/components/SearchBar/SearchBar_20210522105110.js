import React from 'react'
import {View,Text,TextInput,StyleSheet} from "react-native"


function SearchBar(){

    const [query, setQuery] = useState(value);
    const [error, setError] = useState()
    return (
        <View style={[styles.container, style]}>
          
        </View >
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:40
    }
})

export default SearchBar