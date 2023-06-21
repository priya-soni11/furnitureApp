import {StyleSheet} from 'react-native';

const SplashScreenStyle = StyleSheet.create({
  firstview: {
    flex: 0.5,
    backgroundColor: '#E5E9EC',
  },
  secondview: {
    flex: 0.5,
    backgroundColor: 'white',
  },
  image: {
    height: 400,
    width: '100%',
    flex: 1,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: 400,
    padding: 10,
    alignItems: 'center',
    height: 290,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 310,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -25,
  },
  secondviewtext: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
  },
  secondviewtext2: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
    color: 'gray',
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
});

export default SplashScreenStyle;
