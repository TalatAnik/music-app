import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground, StatusBar } from "react-native";
import {Slider} from '@miblanchard/react-native-slider';

import { AntDesign } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


const MusicPlayer = ()=> {

  return (

      <SafeAreaView style={style.mainContainer}>
        <StatusBar 
          barStyle={"light-content"} 
          animated={true}
          backgroundColor="#8D2D2D"  
        />
        <ImageBackground
          style={style.mainBg}
          source={require('../../assets/mainBG.png')}
          resizeMode="cover"
        >


          <Image 
            source={{uri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg'}}
            style = {style.albumArt}
          />

          <View style={style.songDetails}>
            <Text style={style.songTitle}>Song Title</Text>
            <Text style={style.songArtist}>Artist Name</Text>
          </View>

          <View style={style.socialButtons}>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="repeat" size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="shuffle" size={26} color="white" />
            </TouchableOpacity>

          </View>
          
          <View style = {style.sliderWrapper}>
            
            <Slider
              thumbTintColor="#D1D100"
              trackStyle={style.track}
              minimumTrackStyle={style.minTrack}
              value={10}
              maximumValue={100}
              minimumValue={0}
              onValueChange={(value) => 20}
            />

            
          </View>

          



          <View style={style.controls}>

            

            <TouchableOpacity>
              <AntDesign name="stepbackward" size={30} color="#FFFF8A" />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="play" size={42} color="#FFFF8A" />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="stepforward" size={30} color="#FFFF8A" />
            </TouchableOpacity>
            
            
            
          </View>
            

          
          
        </ImageBackground>
      </SafeAreaView>
    
  )


  
}
const style = StyleSheet.create({
  mainContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    
  },
  mainBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  albumArt: {
    width: '80%',
    height: '40%',
    marginBottom: 25,
    borderRadius: 10
  },
  songDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  songTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5
  },
  songArtist: {
    color: 'white',    
    marginBottom: 10
  },
  sliderWrapper: {
    width: '90%'
  },
  track: {
    backgroundColor: '#FFFF8A'
  },
  minTrack: {
    backgroundColor: '#D1D100'
  },
  controls: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center'
    
  },
  socialButtons: {
    width: '90%',
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center'
  }
})


export default MusicPlayer;