import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



export default function Panier({ val }) {
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);

  let [loged, setLoged] = useState({
    logged: false,
    name: null,
    notifiToken: null
  })

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  const remember = async () => {
      try {
      await SecureStore.setItemAsync(
        'userinf',
        JSON.stringify({
          logged: true,
          name: val,
          notifiToken: expoPushToken
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
  schedulePushNotification();
        await remember()
        getValueFor('userinf')
        .then(e=>{
          console.log(e)
        })
      


  async function getValueFor(key) {
 
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result
    } else {
      alert('No values stored under that key.');
    }
  }

  return (
    <View>
    
      
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "ZANGOCHAP PROMO",
      body: '10000% de reduction sur zangochap',
      data: { data: 'voir' },
    },
    trigger: { seconds: 2 },
  });
}



async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}