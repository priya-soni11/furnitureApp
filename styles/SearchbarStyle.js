import {StyleSheet} from 'react-native';

const SearchbarStyle = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  roots: {
    flex: 1,
    backgroundColor: '#23242c',
    borderRadius: 15,
    height: 50,
    width: '20%',
    marginTop: 10,
    marginRight: 10,
  },
  icon: {
    height: 40,
    width: '70%',
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    marginLeft: 18,
    marginTop: 1,
  },
  textInput: {
    height: 50,
    width: '70%',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 12,
    backgroundColor: '#f6f6f6',
    elevation: 5,
  },
});

export default SearchbarStyle;
