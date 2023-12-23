import React from 'react';
import {  Text, StyleSheet, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



type HeaderProps = {
  title: string,
  searchAction: ()=> void,
};

const CommonHeader = (props: HeaderProps)=> {
  return (
    <View style={style.headerBar}>
      <Text style={style.headerText} >{props.title}</Text>

      <View style={style.headerIcons}>
        <Ionicons name="search" size={24} style={style.headerIcon} onPress={props.searchAction} color="white" />
        <Ionicons name="menu" size={32} style={style.headerIcon} color="white" />
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  headerBar: {
    marginTop: 40,
    paddingBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: 0,
    right: 0,
    borderBottomWidth: 0.1,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10

  },

  headerText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 25,
    fontWeight: "600",
    color: "#fff"
  },

  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  headerIcon: {
    margin: 5,
    alignSelf: 'center',
    paddingRight: 5
  }
});


export default CommonHeader;