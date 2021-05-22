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
                    onChangeText={(text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.match(letters)) {
                            setQuery(text)
                            updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Please only enter alphabets")
                    }}
                />
        </View >
    )

}



export default SearchBar