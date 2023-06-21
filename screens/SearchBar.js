/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchbarStyle from '../styles/SearchbarStyle';

const SearchBar = () => {
  return (
    <>
      <View style={SearchbarStyle.root}>
        <TextInput style={SearchbarStyle.textInput} placeholder="Search...." />
        <View style={SearchbarStyle.roots}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={30}
            color={'white'}
            style={SearchbarStyle.icon}
          />
        </View>
      </View>
    </>
  );
};

export default SearchBar;
