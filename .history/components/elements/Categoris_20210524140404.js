import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, StyleSheet, Text, Image, Pressable, SafeAreaView } from 'react-native';
import API from '../config'
import PARAMS from '../../config/contes';

function ViewAll(){
  const navigation1 = useNavigation();
  return(
    <View style={styles.alllign}>
      <Text style={{color:"#fff",fontWeight:"700"}}>PRODUISTS</Text>
     <Pressable onPress={()=>navigation1.navigate('allProducts')}><Text style={{color:"#fff"}}>{"Voir Tout >>"}</Text></Pressable> 
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
  const [state, setState] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    API.get('products/categories')
      .then(data => {
        setState(data)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => setLoading(false))
  }, [])
  const CatrenderItem = ({ item }) => (
    <CateItem
      id={item.id}
      title={item.name}
      img={(item.image!= undefined) ? item.image.src : PARAMS.PROUCTS_IMG_PLACEHOLDER}
    />
  );

  return (
    <SafeAreaView>
       {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#f77918" /></View> : (
      <FlatList
        data={state}
        renderItem={CatrenderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
       )}
      <ViewAll/>
      
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
  alllign:{
    width:PARAMS.SCREEN_WIDTH,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingRight:10,
    paddingLeft:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'red',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
});

export default Cates;