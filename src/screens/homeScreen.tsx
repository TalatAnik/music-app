import React from 'react';
import { ImageBackground, StatusBar, Text, StyleSheet, View, ScrollView } from 'react-native';
import CommonHeader from '../components/CommonHeaderComponent';
import HorizontalCardsArray from '../components/HorizontalCardsArrayComponent';
import SingleHorizontalItem from '../components/SingleItemComponent';


const newReleases = [
  {
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2021/12/Portal-Album-Cover-PP1.jpg',
    title: 'Ek Nodi Jamuna',
    artist: 'James'
  },
  {
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    albumArtUri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911f6fac-f50e-4d62-84a3-95462966314e/dckx8jk-f25a659a-1949-48c8-9604-45406c8ded50.jpg/v1/fill/w_894,h_894,q_70,strp/album_cover_design_for_ambient_band__free__by_incantatorexv_dckx8jk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWY2ZmFjLWY1MGUtNGQ2Mi04NGEzLTk1NDYyOTY2MzE0ZVwvZGNreDhqay1mMjVhNjU5YS0xOTQ5LTQ4YzgtOTYwNC00NTQwNmM4ZGVkNTAuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTExZjZmYWMtZjUwZS00ZDYyLTg0YTMtOTU0NjI5NjYzMTRlXC9pbmNhbnRhdG9yZXh2LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bGBjWlagapMxIpczc1M2-VN_8bd1PlSYYmQBNeULRRE',
    title: 'Firiye Dao',
    artist: 'Miles'
  },
  {
    albumArtUri: '',
    title: 'Ferari Mon',
    artist: 'Miles'
  }
]

const HomeScreen = (props: any) => {
  return (
    <View style={style.mainContainer}>
      <ImageBackground
      style={style.mainBg}
      source={require('../../assets/mainBG.png')}
      resizeMode="cover"
      >
        
        <ScrollView 
          style={style.mainScrollView}
          stickyHeaderIndices={[0, 1]}
        >
          <StatusBar backgroundColor="#8D2D2D" barStyle="dark-content" />

          <CommonHeader title='Home' searchAction={() => props.navigation.navigate('Home')}></CommonHeader>
          
          <HorizontalCardsArray title='New Releases' items= {newReleases}></HorizontalCardsArray>
          
          <View style={style.verticalCards}>
            <Text style={style.verticalCardsHeader}>
              Artists You May Like
            </Text>

            {
              newReleases.map((item)=>(
                <SingleHorizontalItem key={item.title} item={item}></SingleHorizontalItem>
              ))
            }
          </View>


          
          

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
  
  verticalCards: {
    margin: 15,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0.1,
  },

  verticalCardsHeader: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  
  
})
export default HomeScreen;