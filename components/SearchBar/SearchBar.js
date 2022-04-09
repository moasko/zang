import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from "react-native-dynamic-search-bar";

import {
    StyleSheet,
} from 'react-native';

function SearchProductsBar({ value, updateSearch, style }) {


    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>


            </View>
      
        </View >
    )
}
const styles = StyleSheet.create({

    searchContainer:
    {
        borderRadius: 8,
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        flexDirection: 'row'

    },
    container: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
});

export default SearchProductsBar