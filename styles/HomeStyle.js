import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  ProductView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  PopularView: {
    flexDirection: 'row',
  },
  ProductStyle: {
    fontSize: 25,
    color: 'black',
  },
  PopularStyle: {
    fontSize: 20,
    color: 'black',
  },
  itemContainer: {
    // flex:0/5,
    marginHorizontal: 6,
    backgroundColor: 'white',
    margin: 10,
    height: 210,
    width: 175,
    borderRadius: 15,
    elevation: 10,
    marginTop: 50,
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
    backgroundColor: 'black',
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

export default HomeStyle;
