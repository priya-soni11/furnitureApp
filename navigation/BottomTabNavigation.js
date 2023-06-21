import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#23242c',
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            height: 75,
            position: 'absolute',
            elevation: 5,
            paddingTop: 10,
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'white'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="favorite-border"
                  size={25}
                  color={'white'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={25}
                  color={'white'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={'white'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomTabNavigation;
