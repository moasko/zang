import { decode, encode } from 'base-64'
import axios from "axios";
import { ALL_PRODUCTS, ALL_CATEGORIES, GET_PRODUCTS_BY_CATEGORIE } from "../api";

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


export const getAllProducts = (page, per_page) => {
    return new Promise((resolve, reject) => {
        axios.get(ALL_PRODUCTS, {
            auth: authData, params: {
                per_page: per_page,
                page: page
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

export const getProductsByCategory = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(ALL_PRODUCTS, {
            auth: authData, params: {
                category: id
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