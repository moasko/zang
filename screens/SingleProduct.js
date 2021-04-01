import React, { useState,useEffect } from 'react';
import {View,ScrollView,Image,Dimensions,Text} from 'react-native'
import {Header} from 'react-native-elements'
import HTML from 'react-native-render-html'
import API from '../components/config'

const SCREEN_WIDTH = Dimensions.get('window').width

function SingleProduct({route,navigation}){
     const [state,setState] = useState('');
     const [img,setImg] = useState("");

     let {id} = route.params

    API.get(`products/${id}`)
       .then(data=>{
           if(data)
              setState(data)
       })
       .catch(e=>{
           throw e
       })
 
    function getImg(){
    let name = state.name
    return name
 }

    return (
    <ScrollView>
       <Text>{getImg()}</Text>
    </ScrollView>
    )

}

export default SingleProduct