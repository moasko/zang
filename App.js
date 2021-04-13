import { LogBox,Image,Text,View} from 'react-native';
import React from 'react';
import Tabs from './components/Tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProduct from './screens/SingleProduct'
import ByCategoriesScreen from './screens/ByCategoriesScreen'



const Stack = createStackNavigator();

function LogoTitle() {
  return (
<View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
    <Image
      style={{ width: 30, height: 30}}
      source={require('./assets/logoSmple.png')}
    />
    <Text style={{color:"#000",fontSize:15,marginLeft:6,fontWeight:"bold"}}>Zangochap</Text>
</View>
  
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
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

        <Stack.Screen name="ViewCat" component={ByCategoriesScreen} options={{ title: "leste des categories" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <MyStack></MyStack>
  );
}