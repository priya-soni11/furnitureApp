/* eslint-disable react/react-in-jsx-scope */
import {Text, View, StyleSheet, FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Chair',
  },
  {
    id: '3',
    title: 'Table',
  },
  {
    id: '4',
    title: 'Sofa',
  },
];

const MenuItem = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={({item}) => (
          <>
            <View style={styles.item}>
              <Text style={styles.label}>{item.title}</Text>
            </View>
          </>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 25,
    marginLeft: 10,
  },
  item: {
    padding: 12,
    borderRadius: 13,
    margin: 4,
    backgroundColor: '#121216',
    height: 45,
    width: 100,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuItem;
