import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ( navigation: any ) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Logout"
        onPress={() => {
          // Implement logout logic and update authentication state
          // For simplicity, let's assume you have a function called `logout`
          // that handles the logout logic.
          // logout();
          navigation.replace('Login');
        }}
      />
    </View>
  );
};

export default HomeScreen;