//product card
import React, { useState} from 'react';
import { View, FlatList } from 'react-native';
import PARAMS from '../../config/contes';
import Item from './ProductCard';

const ProductsListe = ({
  data,
  loading = false,
  headerComponent = null,
  footerComponent=null
}) => {

  const[isLoading,setIsLoadding]=useState(loading)
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
        />
    </View>
  )
  
}
export default ProductsListe