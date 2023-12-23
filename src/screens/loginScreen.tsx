import React from 'react';
import { StatusBar, SafeAreaView, View, Text, Button } from 'react-native';
import HomeScreen from './HomeScreen';


const LoginScreen = (props: any ) => {

    return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#9A47A1"        
      />
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          // Implement login logic and update authentication state
          // For simplicity, let's assume you have a function called `login`
          // that handles the login logic.
          // login();
          props.navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  )

}

export default LoginScreen;