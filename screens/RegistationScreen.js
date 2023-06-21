import React from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import SignUpStyle from '../styles/SignUpStyle';

const RegistationScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={SignUpStyle.container}>
        <Image
          source={require('/Users/priyasoni/Desktop/FurnitureApp/images/chair.png')}
          style={SignUpStyle.image}
        />
        <View>{/* <Text style={SignInStyle.Text}>Log In</Text> */}</View>
        <View style={SignUpStyle.text}>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={SignUpStyle.TextInput}
              placeholder="Enter Your Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={SignUpStyle.TextInput}
              placeholder="Enter Your Contact No"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              keyboardType="default"
              maxLength={8}
            />
          </View>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={SignUpStyle.TextInput}
              placeholder="Enter Your Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              keyboardType="default"
              maxLength={8}
            />
          </View>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={SignUpStyle.TextInput}
              placeholder="Enter Your Confirm Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              keyboardType="default"
              maxLength={8}
            />
          </View>
          <TouchableOpacity
            style={SignUpStyle.btn}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={SignUpStyle.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={SignUpStyle.registertext}
            onPress={() => navigation.navigate('LoginScreen')}>
            You Already have account?
            <Text style={{color: 'blue'}}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistationScreen;
