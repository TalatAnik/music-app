import React from 'react';
import {  Text, StyleSheet, View, ScrollView, Image} from 'react-native';

type SingleItem = {
  albumArtUri: string,
  title: string,
  artist: string
}

type HorziontalCardsProps = {
  mainTitle: string,
  Items: SingleItem[]
}

const HorizontalCardsArray = (props: HorziontalCardsProps) => {
  return (
    <View style={style.newReleasesView}>
      <Text style={style.horizontalCardHeader}>
        {props.mainTitle}
      </Text>

      <ScrollView style = {style.cardsHorizontal} horizontal={true} >


        {
          props.Items.map((SingleItem) => (

            <View key={SingleItem.title} style = {style.cardSingle}>
              <Image                
                source={{uri: SingleItem.albumArtUri}}
                style = {style.cardImage}
              >                    
              </Image>

              <Text style = {style.cardMainText}>
                {SingleItem.title}
              </Text>
              <Text style = {style.cardSubText}>
                {SingleItem.artist}
              </Text>
              
            </View>
            
          ))
        }
        


        

      </ScrollView>
      
    </View>
  )
}

const style = StyleSheet.create({

    newReleasesView: {
    flex:1,
    justifyContent: 'center',
    marginStart: 10,
    marginTop: 10,
    
  },

  horizontalCardHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },

  cardsHorizontal: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    height: 200
  },

  cardSingle: {
    width: 130,
    marginRight: 15
  },

  cardImage: {
    height: 120,
    width: 120,
    borderRadius: 10
  },

  cardMainText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 15,
    flexShrink:1,
    flexWrap: 'nowrap',
    height: 20
  },

  cardSubText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink:1,
    flexWrap: 'nowrap',
    height: 20
  }
})