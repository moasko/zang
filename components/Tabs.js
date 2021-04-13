import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//screens import 
import HomeScreen from '../screens/HommeScreen'
import ProductsSearchScreen from '../screens/ProductsSearchScreen';
import ContactUsScreen from '../screens/ontactUsScreen';
import PromoScreeen from '../screens/PromoScreeen';


//variables declaration
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Boutique',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />

        <Tab.Screen name="Liste des souhait" component={ProductsSearchScreen} options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }} />

        <Tab.Screen
          name="mon compte" component={PromoScreeen} options={{
            tabBarLabel: 'Promo',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ticket-percent-outline" color={color} size={size} />
            ),
          }} />

        <Tab.Screen
          name="contacte" component={ContactUsScreen} options={{
            tabBarLabel: 'Contacte',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information-outline" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default Tabs