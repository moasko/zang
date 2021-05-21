import React, { useState, useEffect } from 'react';
import {TouchableOpacity,ActivityIndicator, Text, View, FlatList, SafeAreaView } from 'react-native';
import API from '../components/config'
import PARAMS from '../config/contes';
import Item from '../components/ProductCard/ProductCard'


const Pagination = () => {
    let f =[]
for (let i = 1; i < 5; i++) {
   f.push(<TouchableOpacity key={i} style={{}}>
       <View style={{ borderRadius:50, width:40,height:40,backgroundColor:"red",justifyContent:"center",alignItems:"center",flex:1,marginTop:10,marginBottom:10}}>
        <Text style={{color:"#fff"}}>{i}</Text>
       </View>

       </TouchableOpacity>)
}

    return (
        <View style={{ width: PARAMS.SCREEN_WIDTH ,flexDirection:"row",justifyContent:"space-around"}}>{f}</View>
    )
}


function AllProducts({ navigation}) {
    const [state, setState] = useState('')
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        API.get('products', {
            page: 3
        })
            .then(data => {
                setState(data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [])




    const renderItem = ({ item }) => (
        <Item
            key={item.id}
            id={item.id}
            nav={navigation}
            url={(item.images[0] != undefined) ? item.images[0].src : PARAMS.PROUCTS_IMG_PLACEHOLDER}
            name={item.name || "Aucun nom"}
            prix={item.sale_price || "00"}
            preprix={item.regular_price}
            description={item.short_description}
            categories={(item.categories[0] != undefined) ? item.categories[0].name : "non classé"}
            permalink={item.permalink}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isloading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
                <FlatList
                    data={state}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={false}
                    numColumns={2}
                    ListFooterComponent={<Pagination />}
                />)}

        </SafeAreaView>


    )

}

export default AllProducts;