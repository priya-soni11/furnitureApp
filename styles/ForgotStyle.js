import {StyleSheet} from 'react-native';

const ForgotStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  text: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    height: 130,
    width: '30%',
    marginTop: 50,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 40,
    marginBottom: 40,
  },
  inputView: {
    borderBottomWidth: 2,
    borderColor: 'black',
    height: 45,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 300,
  },

  TextInput: {
    height: 40,
    padding: 4,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  btn: {
    backgroundColor: '#121216',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
  },
  forgottext: {
    color: 'black',
    marginLeft: 250,
    marginTop: 10,
    fontSize: 10,
  },
  registertext: {
    fontSize: 13,
    marginTop: 160,
    textAlign: 'center',
    color: 'black',
  },
});

export default ForgotStyle;
