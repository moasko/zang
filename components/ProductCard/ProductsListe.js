//product card
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, View,Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PARAMS from '../../config/contes';
import { setProducts } from '../../redux/actions/products';
import { getAllProducts } from '../../utils/backend/products';
import Pagination from '../elements/Pagination';
import Item from './ProductCard';




const ProductsListe = ({
  data,
  loading = false,
  listeLimite = 50,
  currntPage = 1,
  headerComponent = null,
  footerComponent=null
}) => {


  const[isLoading,setIsLoadding]=useState(loading)


  //redux


  class RenderItem extends React.PureComponent {
    render() {
      const { item } = this.props;
      return (
        <Item
          key={item.id}
          id={item.id}
          url={(item.images[0] != undefined) ? item.images[0].src : PARAMS.PROUCTS_IMG_PLACEHOLDER}
          name={item.name || "Aucun nom"}
          prix={item.sale_price || "00"}
          preprix={item.regular_price}
          description={item.short_description}
          categories={(item.categories[0] != undefined) ? item.categories[0].name : "non classé"}
          permalink={item.permalink}
        />
      )
    }
  }





  return (
    <View>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({ highlighted }) => (
              <View
                style={[
                  style.separator,
                  highlighted && { marginLeft: 0 }
                ]}
              />
            ))
          }
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={item => (item.id).toString()}
          horizontal={false}
          numColumns={(PARAMS.SCREEN_WIDTH >= 600) ? 3 : 2}
          refreshing={true}
          removeClippedSubviews
          initialNumToRender={2}
          maxToRenderPerBatch={1}
          onEndReachedThreshold={1}
          scrollEventThrottle={400}
          ListHeaderComponent={headerComponent}
          ListFooterComponent={footerComponent}
          onEndReached={({ distanceFromEnd }) => {
            console.log("limite", listeLimite)
          }}
        />
    </View>
  )
  
}
export default ProductsListe