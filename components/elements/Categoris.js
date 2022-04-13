import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, StyleSheet, Text, Image, Pressable, SafeAreaView, ActivityIndicator } from 'react-native';
import PARAMS from '../../config/contes';
import HeaderImage from './HeaderImage';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../utils/backend/products';
import { setCategories } from '../../redux/actions/products';



function ViewAll() {
  const navigation1 = useNavigation();
  return (
    <View style={styles.alllign}>
      <Text style={{ color: "#fff", fontWeight: "700" }}>PRODUISTS</Text>

      <Pressable onPress={() => navigation1.navigate('allProducts')}>
        <Text style={{ color: "#fff" }}>Voir Tout</Text>
      </Pressable>
    </View>
  )
}
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
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories.categories);


  useEffect(() => {
    setLoading(true);
    getAllCategories().then(res => {
      dispatch(setCategories(res));
      setLoading(false);
    });
  }, []);


  const CatrenderItem = ({ item }) => (
    <CateItem
      id={item.id}
      title={item.name}
      img={(item.image != undefined) ? item.image.src : PARAMS.PROUCTS_IMG_PLACEHOLDER}
    />
  );

  return (
    <SafeAreaView
    
    >
      <HeaderImage />
      {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 150 }}>
        <ActivityIndicator size="large" color="#f77918" />
      </View>
        : (
          <FlatList
            data={categories}
            renderItem={CatrenderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
          />
        )}
      <ViewAll />
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
    padding: 3,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#e76300',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 9,
    borderWidth: 2,
    borderColor: '#fff'

  },
  alllign: {
    width: PARAMS.SCREEN_WIDTH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'red',
  }
});

export default Cates;