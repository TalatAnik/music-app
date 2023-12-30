import React from 'react';
import { ImageBackground, SafeAreaView, Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CommonHeader from '../components/CommonHeaderComponent';


const LibraryScreen = (props: any) => {


  return (
    <View style={style.mainContainer}>
      <ImageBackground
      style={style.mainBg}
      source={require('../../assets/mainBG.png')}
      resizeMode="cover"
      >
        
        <ScrollView style={style.mainScrollView}>

          <CommonHeader title='Library' searchAction={() => props.navigation.navigate('Home')}></CommonHeader>

          
          

        </ScrollView>
        
      </ImageBackground>
    </View>
  )
}


const style = StyleSheet.create({
  mainContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: '#523B54',
    width: '100%'
  },
  mainScrollView: {
    width: '100%'
  },

  mainBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  

})

export default LibraryScreen;