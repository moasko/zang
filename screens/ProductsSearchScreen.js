import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, StatusBar, SafeAreaView, Dimensions, Image, Pressable } from 'react-native';
import API from '../components/config'
import SearchBar from 'react-native-search-bar'



function ProductsSearchScreen() {
 return(
   <View>
     <SearchBar></SearchBar>
   </View>
 )
}
export default ProductsSearchScreen