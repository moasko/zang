import { LogBox} from 'react-native';
import React,{useState} from 'react';
import Tabs from './components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProduct from './screens/SingleProduct';
import ByCategoriesScreen from './screens/ByCategoriesScreen';
import OrderScreen from './screens/orderScreen';
import AllProducts from './screens/AllProducts';
import ProductsSearchScreen from './screens/ProductsSearchScreen';
import LogoTitle from './components/elements/Logo';
import AllHeader from './components/elements/AllHeader';
import Panier from './screens/Panier';






LogBox.ignoreLogs(['Remote debugger']);
const Stack = createStackNavigator();


//redux
import Store from './redux';
import { Provider } from 'react-redux';

const MyStack = () => {

  const [isInternetAvailable, setIsInternetAvailable] = useState(false);

  return  (
  <NavigationContainer>
  
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
          <Stack.Screen name="ViewCat" component={ByCategoriesScreen} options={{ 
            title: "liste des categories",
            headerTitle: props => <AllHeader  {...props} />
            }} />
          <Stack.Screen name="order" component={OrderScreen} options={{ title: "Panier" }} />
          <Stack.Screen name="allProducts" component={AllProducts} options={{
             title: "Tout les produits" ,
             headerTitle: props => <AllHeader {...props} />
             }} />
          <Stack.Screen name="roductsSearchScreen" component={ProductsSearchScreen} options={{
             title: "Rechercher",
             headerTitle: props => <AllHeader {...props} />
             }} />
          <Stack.Screen name="panier" component={Panier} options={{ title: "Mon Panier" }} />
          
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