import { decode, encode } from 'base-64'
import axios from "axios";
import { ALL_PRODUCTS, ALL_CATEGORIES, SINGLE_PRODUCT } from "../api";


if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

const authData = {
    username: "ck_22f124ada9fe80ba0263919e6cfa568a9114947c",
    password: "cs_5ec52d6e081ce7104259b3e05793e09715173deb"
}


export const getAllProducts = (curPage,per_page) => {
    console.log("page"+curPage)
    return new Promise((resolve, reject) => {
        axios.get(ALL_PRODUCTS, {
            auth: authData, 
            params: {
                page:curPage,
                per_page: per_page,
            }
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}


export const getProductsByCategory = (id,page) => {
    return new Promise((resolve, reject) => {
        axios.get(ALL_PRODUCTS, {
            auth: authData, params: {
                category: id,
                page:page,
            }
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getSingleProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(SINGLE_PRODUCT + id, {
            auth: authData
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        axios.get(ALL_CATEGORIES, { auth: authData })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}


export const searchProduct = (search) => {
    return new Promise((resolve, reject) => {
        axios.get(ALL_PRODUCTS, {
            auth: authData,
            params: {
                search: search,
                per_page:80
            }
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}