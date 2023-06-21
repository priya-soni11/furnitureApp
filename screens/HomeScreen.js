import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from './SearchBar';
import MenuItem from './MenuItem';
import ItemFlat from './ItemFlat';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.mainText}>Choose</Text>
      <Text style={styles.mainText}>Your Product</Text>
      <SearchBar />
      <MenuItem />
      <ItemFlat />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 20,
    marginLeft: 15,
    margin: 3,
  },
});

export default HomeScreen;
