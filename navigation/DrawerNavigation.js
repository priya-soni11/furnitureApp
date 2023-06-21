/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import CartScreen from '../screens/CartScreen';
import BottomTabNavigation from './BottomTabNavigation';
import CustomDrawer from './CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, StyleSheet, View} from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        sceneContainerStyle: {backgroundColor: '#ffffff'},
        drawerLabelStyle: {marginLeft: -20, fontSize: 18},
        drawerActiveBackgroundColor: '#868686',
        drawerActiveTintColor: 'white',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={BottomTabNavigation}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => (
            <>
              <View style={styles.container}>
                <MaterialCommunityIcons name="home" size={22} color="black" />
                <Text style={styles.text}>Home</Text>
              </View>
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => (
            <View style={styles.container}>
              <MaterialCommunityIcons name="star" size={22} color="black" />
              <Text style={styles.text}>Login</Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    padding: 2,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default DrawerNavigation;
