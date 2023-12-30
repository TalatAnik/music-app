import React from 'react';
import {  Text, StyleSheet, View, ScrollView, Image} from 'react-native';

type SingleItem = {
  albumArtUri: string,
  title: string,
  artist: string
}


const HorizontalCardsArray = (props: {title: string, items: SingleItem[] }) => {
  return (
    <View style={style.newReleasesView}>
      <Text style={style.horizontalCardHeader}>
        {props.title}
      </Text>

      <ScrollView style = {style.cardsHorizontal} horizontal={true} showsHorizontalScrollIndicator={false} >


        {
          props.items.map((SingleItem) => (

            <View key={SingleItem.title} style = {style.cardSingle}>
              {
                SingleItem.albumArtUri?(
                  <Image                
                    source={{uri: SingleItem.albumArtUri}}
                    style = {style.cardImage}
                  /> 
                ): (
                  <Image
                    source={require('../../assets/logo.png')}
                    style = {style.cardImage}                  
                  />
                )
              }

                                 
              

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
    marginTop: 20,
    borderBottomWidth: 0.1,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    
  },

  horizontalCardHeader: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
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
    fontSize: 12,
    marginTop: 15,
    marginLeft: 5,
    flexShrink:1,
    flexWrap: 'nowrap',
    height: 20
  },

  cardSubText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    flexShrink:1,
    flexWrap: 'nowrap',
    height: 20,
    marginLeft: 5,
  }
})

export default HorizontalCardsArray;