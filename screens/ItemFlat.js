/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeStyle from '../styles/HomeStyle';

const DATA = [
  {
    id: '1',
    image: '/Users/priyasoni/Desktop/FurnitureApp/images/chair.png',
    name: 'fff',
    weight: 'fdf',
    price: 200,
  },
];

const ItemFlat = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100, marginHorizontal: 8}}
      renderItem={({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <MaterialCommunityIcons
                name={item.isFavourite ? 'heart' : 'heart-outline'}
                color={'Green'}
                size={24}
                style={{padding: 10, alignSelf: 'flex-end'}}
              />
              <Image source={{uri: item.image}} style={styles.itemImages} />
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.weightText}>{item.weight}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.priceText}>{item.price}$</Text>
                <Text style={styles.priceText}>{item.price * item.count}$</Text>

                {/* <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name="minus"
                    color={'Gray'}
                    size={20}
                    style={styles.minusIcon}
                  />
                  <Text style={{paddingHorizontal: 5, fontSize: 16}}>
                    {item.count}
                  </Text>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="plus"
                      color={'White'}
                      size={20}
                      style={styles.plusIcon1}
                    />
                  </TouchableOpacity>
                </View> */}
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus"
                    color={'White'}
                    size={20}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 6,
    margin: 10,
    height: 260,
    width: 175,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'red',
    marginTop: 30,
  },
  itemImages: {
    height: 90,
  },
  nameText: {
    fontSize: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  weightText: {
    fontSize: 10,
    marginHorizontal: 10,
    color: 'gray',
  },
  priceText: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    marginRight: 10,
  },
  plusIcon: {
    backgroundColor: 'white',
    height: 25,
    width: 25,
    borderRadius: 15,
    padding: 3,
    marginRight: 10,
  },
  plusIcon1: {
    backgroundColor: 'black',
    height: 25,
    width: 25,
    borderRadius: 15,
    padding: 3,
  },
  minusIcon: {
    borderRadius: 15,
    padding: 2,
  },
  flatstyle: {
    // marginBottom:60,
    marginHorizontal: 10,
  },
});

export default ItemFlat;
