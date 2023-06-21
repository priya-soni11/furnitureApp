import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import SplashScreenStyle from '../styles/SplashScreenStyle';
import ViewSlider from 'react-native-view-slider';

const SplashScreen = ({navigation}) => {
  const Images = [
    {
      uri: require('/Users/priyasoni/Desktop/FurnitureApp/images/sofa.png'),
    },
    {
      uri: require('/Users/priyasoni/Desktop/FurnitureApp/images/sofa1.png'),
    },
    {
      uri: require('/Users/priyasoni/Desktop/FurnitureApp/images/sofa2.png'),
    },
  ];

  return (
    <>
      <View style={SplashScreenStyle.firstview}>
        <Text style={SplashScreenStyle.text}>Furniture</Text>
        <ViewSlider
          renderSlides={
            <>
              {Images.map(image => (
                <View style={SplashScreenStyle.viewBox}>
                  <Image source={image.uri} style={SplashScreenStyle.image} />
                </View>
              ))}
            </>
          }
          style={SplashScreenStyle.slider}
          height={200}
          slideCount={3}
          dots={true}
          dotActiveColor="black"
          dotInactiveColor="gray"
          dotsContainerStyle={SplashScreenStyle.dotContainer}
          autoSlide={true}
          slideInterval={2000}
        />
      </View>
      <View style={SplashScreenStyle.secondview}>
        <Text style={SplashScreenStyle.secondviewtext}>
          Find the Best Furniture {'\n'} Style for You
        </Text>
        <Text style={SplashScreenStyle.secondviewtext2}>
          There are many new outfits that {'\n'} make you cool
        </Text>
        <TouchableOpacity
          style={SplashScreenStyle.btn}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={SplashScreenStyle.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SplashScreen;
