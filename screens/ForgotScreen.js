import React from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ForgotStyle from '../styles/ForgotStyle';

const ForgotScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={ForgotStyle.container}>
        <Image
          source={require('/Users/priyasoni/Desktop/FurnitureApp/images/lock.png')}
          style={ForgotStyle.image}
        />
        <View>{/* <Text style={SignInStyle.Text}>Log In</Text> */}</View>
        <View style={ForgotStyle.text}>
          <View style={ForgotStyle.inputView}>
            <TextInput
              style={ForgotStyle.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
            />
          </View>
          <TouchableOpacity
            style={ForgotStyle.btn}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={ForgotStyle.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotScreen;
