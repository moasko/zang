import React, { useState, useEffect, useRef } from 'react';
import { RefreshControl, TouchableOpacity, ActivityIndicator, Text, View, FlatList, SafeAreaView,VirtualizedList } from 'react-native';
import API from '../components/config'
import PARAMS from '../config/contes';
import Item from '../components/ProductCard/ProductCard'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../utils/backend/products';
import BigList from "react-native-big-list";



const Pagination = () => {

    return (
        <View style={{ width: 40, height: 40, backgroundColor: "red" }}>
            <Text>{'>'}</Text>
        </View>
    )
}


function AllProducts({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limite, setLimite] = useState(100)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)

    let vue = useRef(true);
    useEffect(() => {
        vue.current = true;
        setLoading(true)
        getAllProducts(page, limite)
            .then(res => {
                if (vue) {
                    dispatch(setProducts(res))
                }
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            vue.current = false;
        }
    }, [products === null, limite])




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
            {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
                <BigList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={false}
                    numColumns={2}
                    itemHeight={450}
                    refreshing={true}
                    refreshControl={<RefreshControl />}
                    onEndReached={({ distanceFromEnd }) => {
                        setPage(page + 1)
                    }
                    }
                />)}

        </SafeAreaView>


    )

}

export default AllProducts;