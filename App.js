import { LogBox, Image, Text, View, RefreshControl } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import Tabs from './components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProduct from './screens/SingleProduct';
import ByCategoriesScreen from './screens/ByCategoriesScreen';
import OrderScreen from './screens/orderScreen';
import AllProducts from './screens/AllProducts';
import LogoTitle from './components/elements/Logo';
LogBox.ignoreLogs(['Remote debugger']);
const Stack = createStackNavigator();


//redux
import Store from './redux';
import { Provider } from 'react-redux';


const MyStack = () => {
  return  (<NavigationContainer>
        <Stack.Navigator initialRouteName={"home"} screenOptions={{
          gestureEnabled:true
        }}>
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
          <Stack.Screen name="ViewCat" component={ByCategoriesScreen} options={{ title: "liste des categories" }} />
          <Stack.Screen name="order" component={OrderScreen} options={{ title: "Panier" }} />
          <Stack.Screen name="allProducts" component={AllProducts} options={{ title: "Tout les produits" }} />
        </Stack.Navigator>
      </NavigationContainer>)
  

};

export default function App() {
  return (
    <Provider store={Store}>
    <MyStack></MyStack>
    </Provider>
  );
}