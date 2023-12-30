import React, { useState } from 'react';
import { FlatList, Text, Image, StyleSheet, View, ImageBackground } from 'react-native';


type ItemProps = {
  id: number,
  albumArtUri: string,
  title: string,
  artist: string
}


const SingleCardItem  = (props: {Song: ItemProps}) => {
  return (

    <View style={style.singleCard}>
      {
        (props.Song.albumArtUri)?(
          <Image
            source={{uri: props.Song.albumArtUri}}
            style = {style.cardImage}
          />
        ):(
          <Image
            source={require('../../assets/icon.png')}
            style = {style.cardImage}                  
          />
        )
      }

      <Text style={style.cardTitle}>
        {props.Song.title}
      </Text>
      <Text style={style.cardArtist}>
        {props.Song.artist}
      </Text>


    </View>
      
    
    
    
  )
}

const style = StyleSheet.create({
  singleCard: {
    margin: 10
  },

  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  cardTitle:  {
    marginTop: 5,
    color: 'white',
    fontSize:12
  },
  cardArtist:  {
    color: 'white',
    fontSize:12,
    fontWeight: '800'
  }
})

export default SingleCardItem;