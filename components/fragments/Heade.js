import React from 'react';
import { Header } from 'react-native-elements'

function Heade() {
  return (
    <Header
      backgroundColor='#f77918'
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'ZANGOCHAP', style: { color: '#fff' } }}
      rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
    />
  )
}
export default Heade