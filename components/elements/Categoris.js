import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import API from '../config'

const Item = ({ title, img }) => (
  <View style={styles.item}>
    <View style={styles.contour}>
      <Image
        style={styles.img}
        source={{
          uri: img,
          cache: 'only-if-cached'
        }}
      />
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Cates = () => {
  const [state, setState] = useState('');
  API.get('products/categories')
    .then(data => {
      setState(data)
    })
    .catch(e => {
      console.log(e)
    })

  const renderItem = ({ item }) => (
    <Item title={item.name} img={item.image.src} />
  );

  return (
    <FlatList
      data={state}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />

  );
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 25
  },
  contour: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    padding: 3,
    backgroundColor: '#e84500',
  },
  title: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 5,
    backgroundColor: '#e84',
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontSize: 9,
  },
});

export default Cates;