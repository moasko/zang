import React, { useState, createContext } from 'react';
import { Text, View } from 'react-native';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
    const [el, useEl] = useState('salut moasko');
    return (
        <ProductsContext.Provider value={el}>
            {props.children}
        </ProductsContext.Provider>
    )
}


