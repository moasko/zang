import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductsListe from '../components/ProductCard/ProductsListe';
import Pagination from '../components/elements/Pagination';
import { paginationAction, getProdsAction } from '../redux/actions/products'
import API from '../components/config';

function AllProducts({ navigation }) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [limite, setLimite] = useState(30)
    const [curentPage, setCurentPage] = useState(1)


    const dispatch = useDispatch();

    const products = useSelector(state => state.pagination.products);
    const page = useSelector(state => state.pagination.page);

    useEffect(() => {
        setLoading(true)
        API.get('products', {
            per_page: limite,
            page: curentPage
        })
            .then(res => {
                dispatch(paginationAction({
                    page: curentPage,
                    products: res
                }))
                setLoading(false)
            })
            .catch(err => {
                setError(err)
            })
    }, [products=="",curentPage])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#f77918" /></View>)
                : (
                    <ProductsListe
                        data={products}
                        listeLimitet={limite}
                        footerComponent={<Pagination
                            page={page}
                            setNext={() => {
                                setCurentPage(curentPage + 1)
                            }}
                            setPrev={() => {
                                setCurentPage(curentPage - 1)
                            }}
                        />}
                    />
                )}
        </SafeAreaView>

    )

}

export default AllProducts;