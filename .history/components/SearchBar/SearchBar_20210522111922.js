import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet} from "react-native"


function SearchBar({value, updateSearch}){

    const [query, setQuery] = useState(value);
    const [error, setError] = useState()
    return (
        <View>
          <TextInput
                    value={query}
                    placeholder="Search"
                    style={styles.textInput}
                />
        </View >
    )

}



export default SearchBar