import React from "react";
import { Text, Image, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


type item = {
  albumArtUri: string,
  title: string,
  artist: string
}

const SingleItem = (props: {item: item}) => {

  return (

    <View style={style.verticalCard}>
      <View style={style.verticalCardInnard}>

        
        {props.item.albumArtUri?(
          <Image
            source={{uri: props.item.albumArtUri}}
            style = {style.cardImage}                  
          />
        ):(
          <Image
            source={require('../../assets/icon.png')}
            style = {style.cardImage}                  
          />
        )}
        
        

        <View style={style.cardInnardTexts}>
          
          <Text style={style.cardInnardTextTop} >
            {props.item.title}
          </Text>
          <Text style={style.cardInnardTextMid} >
            {props.item.artist}
          </Text>

        </View>
        
      </View>
      
      <View>
        <Entypo name="dots-three-vertical" size={16} color="white" style={style.cardDots} />
      </View>
    </View>
  )


}

const style = StyleSheet.create({
  verticalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  verticalCardInnard: {
    flexDirection: 'row'
  },
  cardImage:  {
    height: 50,
    width: 50,
    borderRadius: 6
  },
  cardInnardTexts: {
    marginLeft: 10
  },
  cardDots: {
    marginTop: 15
  },
  cardInnardTextTop: {
    color: 'white',
    fontSize: 14
  },
  
  cardInnardTextMid: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default SingleItem;