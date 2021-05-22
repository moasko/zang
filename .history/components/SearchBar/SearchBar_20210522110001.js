import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet} from "react-native"


function SearchBar({value, updateSearch}){

    const [query, setQuery] = useState(value);
    const [error, setError] = useState()
    return (
        <View>
          <Text>aa</Text>
        </View >
    )

}



export default SearchBar