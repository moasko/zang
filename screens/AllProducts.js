import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../utils/backend/products';
import ProductsListe from '../components/ProductCard/ProductsListe';
import Pagination from '../components/elements/Pagination';



function AllProducts({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limite, setLimite] = useState(50)

    const [currentPage, setCurrentPage] = useState(2)

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)

    const getAllProduct = () => {
        setLoading(true)
        getAllProducts(currentPage, limite)
            .then(res => {
                dispatch(setProducts(res))
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        getAllProduct()
    }, [products === null, currentPage])


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
                            page={currentPage}
                            setNext={() => {
                                setCurrentPage(currentPage + 1)
                            }}
                            setPrev={() => {
                                if (currentPage > 1) {
                                    setCurrentPage(currentPage - 1)
                                }
                            }}
                        />}
                    />
                )}
        </SafeAreaView>

    )

}

export default AllProducts;