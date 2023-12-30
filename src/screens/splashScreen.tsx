import React from 'react';
import { ImageBackground, Text, Image, StyleSheet, Pressable, View } from 'react-native';


const SplashScreen = () => {

  return (
    <View style={style.mainContainer}>
      <ImageBackground
        style={style.mainBg}
        source={require('../../assets/mainBG.png')}
        resizeMode="cover"
      >
        

        <Image
          style={style.logoImage}
          source={require('../../assets/logo.png')}
        />

        <Text style={style.mainTitle}>লয়</Text>
        <Text style={style.subTitle}>আপনার সুর</Text>

        <Pressable style={style.signupButton}>
          <Text style={style.text}>Sign Up</Text>
        </Pressable>
        <Pressable style={style.loginButton}>
          <Text style={style.text}>Log In</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )

}

const style = StyleSheet.create({
  mainContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: '#523B54'
  },

  mainBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoImage: {
    height: 240,
    width: 240,
    
  },

  mainTitle: {
    color: "#ffff",
    fontSize: 65,
    fontWeight: '800',
    marginTop: 50,
   
  },

  subTitle: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: '300',

  },

  signupButton: {
    width: 200,
    height: 50,
    marginTop: 70,
    backgroundColor: "#3A293C",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30
  },

  loginButton: {
    width: 200,
    height: 50,
    marginTop: 30,
    backgroundColor: "#2D1D2E",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30
  },

  text: {
    color: "#fff",
    textTransform: 'uppercase'
  }
})

export default SplashScreen;