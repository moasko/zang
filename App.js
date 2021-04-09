import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger'])
import React from 'react';
import Tabs from './components/Tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProduct from './screens/SingleProduct'
import ByCategoriesScreen from './screens/ByCategoriesScreen'
import { startClock } from 'react-native-reanimated';



const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: 'Zangochap',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen name="SingleProduct" component={SingleProduct} options={{
          title: "Detail Produit"
        }} />

        <Stack.Screen name={"ViewCat"} component={ByCategoriesScreen} options={{ title: "leste des categories" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <MyStack></MyStack>
  );
}