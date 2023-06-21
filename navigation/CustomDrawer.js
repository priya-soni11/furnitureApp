/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

function CustomDrawer(props) {
  return (
    <View style={styles.screen}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <Image
          source={require('/Users/priyasoni/Desktop/FurnitureApp/images/profile.png')}
          style={styles.image}
        />
        <Text
          style={{
            fontSize: 22,
            padding: 10,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginRight: 20,
          }}>
          Priya Soni
        </Text>
        <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 80,
  },
  btntext: {
    fontSize: 18,
    color: 'blue',
    marginTop: 2,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#69ABD2',
    borderRadius: 20,
    padding: 8,
    marginTop: 2,
  },
});
export default CustomDrawer;
