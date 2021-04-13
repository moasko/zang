import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, StyleSheet, Text, Image, Pressable, SafeAreaView } from 'react-native';
import API from '../config'


const CateItem = ({ id, title, img }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate('ViewCat', { id: id, title: title })}>
      <View style={styles.contour}>
        <Image
          style={styles.img}
          source={{
            uri: img
          }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
};

const Cates = () => {
  const [state, setState] = useState('');
  try {
    useEffect(() => {
      API.get('products/categories')
        .then(data => {
          new Promise((resolved,rejected) => {
            setTimeout(() => {
              resolved(setState(data))
            }, 1000)
          })

        })
        .catch(e => {
          console.log(e)
        })
    }, [])
  } catch (e) {
    console.log(e)
  }

  const CatrenderItem = ({ item }) => (
    <CateItem
      id={item.id}
      title={item.name}
      img={item.image.src}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={state}
        renderItem={CatrenderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
    </SafeAreaView>


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
    padding: 5,
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