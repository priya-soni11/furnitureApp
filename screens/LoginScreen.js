import React from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import SignInStyle from '../styles/SignInStyle';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={SignInStyle.container}>
        <Image
          source={require('/Users/priyasoni/Desktop/FurnitureApp/images/chair.png')}
          style={SignInStyle.image}
        />
        <View>{/* <Text style={SignInStyle.Text}>Log In</Text> */}</View>
        <View style={SignInStyle.text}>
          <View style={SignInStyle.inputView}>
            <TextInput
              style={SignInStyle.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={SignInStyle.inputView}>
            <TextInput
              style={SignInStyle.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              keyboardType="default"
              maxLength={8}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
            <Text style={SignInStyle.forgottext}>Forgot Password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={SignInStyle.btn}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={SignInStyle.btnText}>Log In</Text>
          </TouchableOpacity>
          <Text
            style={SignInStyle.registertext}
            onPress={() => navigation.navigate('RegistationScreen')}>
            You don't have account?
            <Text style={{color: 'blue'}}>Register</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
