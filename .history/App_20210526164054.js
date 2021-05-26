import { LogBox, Image, Text, View } from 'react-native';
import PARAMS from './config/contes';
import React, { useState, useContext } from 'react';
import Tabs from './components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProduct from './screens/SingleProduct';
import ByCategoriesScreen from './screens/ByCategoriesScreen';
import OrderScreen from './screens/orderScreen';
import AllProducts from './screens/AllProducts';
import firstLog from './screens/firstLogScreen';



LogBox.ignoreLogs(['Remote debugger']);

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/48x48.png')}
      />
      <Text style={{ color: "#000", fontSize: 15, marginLeft: 6, fontWeight: "bold" }}>Zangochap</Text>
    </View>

  );
}
 
const MyStack = () => {
  let [loged,setLoged]=useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={(loged==false)?"firstlog":"home"}>
        <Stack.Screen
          name="home"
          component={Tabs}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen name="SingleProduct" component={SingleProduct} options={{
          title: "Detail Produit"
        }} />
        <Stack.Screen name="firstlog" component={<firstLog/>} options={{title:"moasko",headerShown:false}}/>
        <Stack.Screen name="ViewCat" component={ByCategoriesScreen} options={{ title: "liste des categories" }} />
        <Stack.Screen name="order" component={OrderScreen} options={{ title: "Panier" }} />
        <Stack.Screen name="allProducts" component={AllProducts} options={{ title: "Tout les produits" }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default function App() {

  return (
    <MyStack></MyStack>
  );
}