import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet} from "react-native"


function SearchBar({value, updateSearch}){

    const [query, setQuery] = useState(value);
    const [error, setError] = useState()
    return (
        <View style={[styles.container]}>
          
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