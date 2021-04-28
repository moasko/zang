import React,{useEffect} from 'react'
import WooCommerceAPI from 'react-native-woocommerce-api';

  const API = new WooCommerceAPI({
  url: 'https://zangochap.ci',
  ssl: true,
  consumerKey: 'ck_22f124ada9fe80ba0263919e6cfa568a9114947c',
  consumerSecret: 'cs_5ec52d6e081ce7104259b3e05793e09715173deb',
  wpAPI: true,
  version: 'wc/v3',
  queryStringAuth: true
});



export default API