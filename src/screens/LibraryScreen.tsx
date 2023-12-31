import React, { useState } from 'react';
import { FlatList, StyleSheet, View, ImageBackground, StatusBar } from 'react-native';


import CommonHeader from '../components/CommonHeaderComponent';
import SingleCardItem from '../components/SingleCardComponent';

    
const mySongs = [
  {
    id: 0,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2021/12/Portal-Album-Cover-PP1.jpg',
    title: 'Ek Nodi Jamuna',
    artist: 'James'
  },
  {
    id: 1,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 2,
    albumArtUri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911f6fac-f50e-4d62-84a3-95462966314e/dckx8jk-f25a659a-1949-48c8-9604-45406c8ded50.jpg/v1/fill/w_894,h_894,q_70,strp/album_cover_design_for_ambient_band__free__by_incantatorexv_dckx8jk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWY2ZmFjLWY1MGUtNGQ2Mi04NGEzLTk1NDYyOTY2MzE0ZVwvZGNreDhqay1mMjVhNjU5YS0xOTQ5LTQ4YzgtOTYwNC00NTQwNmM4ZGVkNTAuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTExZjZmYWMtZjUwZS00ZDYyLTg0YTMtOTU0NjI5NjYzMTRlXC9pbmNhbnRhdG9yZXh2LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bGBjWlagapMxIpczc1M2-VN_8bd1PlSYYmQBNeULRRE',
    title: 'Firiye Dao',
    artist: 'Miles'
  },
  {
    id: 3,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 4,
    albumArtUri: '',
    title: 'Ferari Mon',
    artist: 'Miles'
  },
  {
    id: 5,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2021/12/Portal-Album-Cover-PP1.jpg',
    title: 'Ek Nodi Jamuna',
    artist: 'James'
  },
  {
    id: 6,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 7,
    albumArtUri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911f6fac-f50e-4d62-84a3-95462966314e/dckx8jk-f25a659a-1949-48c8-9604-45406c8ded50.jpg/v1/fill/w_894,h_894,q_70,strp/album_cover_design_for_ambient_band__free__by_incantatorexv_dckx8jk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWY2ZmFjLWY1MGUtNGQ2Mi04NGEzLTk1NDYyOTY2MzE0ZVwvZGNreDhqay1mMjVhNjU5YS0xOTQ5LTQ4YzgtOTYwNC00NTQwNmM4ZGVkNTAuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTExZjZmYWMtZjUwZS00ZDYyLTg0YTMtOTU0NjI5NjYzMTRlXC9pbmNhbnRhdG9yZXh2LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bGBjWlagapMxIpczc1M2-VN_8bd1PlSYYmQBNeULRRE',
    title: 'Firiye Dao',
    artist: 'Miles'
  },
  {
    id: 8,
    albumArtUri: '',
    title: 'Ferari Mon',
    artist: 'Miles'
  },
  {
    id: 9,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2021/12/Portal-Album-Cover-PP1.jpg',
    title: 'Ek Nodi Jamuna',
    artist: 'James'
  },
  {
    id: 10,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 11,
    albumArtUri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911f6fac-f50e-4d62-84a3-95462966314e/dckx8jk-f25a659a-1949-48c8-9604-45406c8ded50.jpg/v1/fill/w_894,h_894,q_70,strp/album_cover_design_for_ambient_band__free__by_incantatorexv_dckx8jk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWY2ZmFjLWY1MGUtNGQ2Mi04NGEzLTk1NDYyOTY2MzE0ZVwvZGNreDhqay1mMjVhNjU5YS0xOTQ5LTQ4YzgtOTYwNC00NTQwNmM4ZGVkNTAuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTExZjZmYWMtZjUwZS00ZDYyLTg0YTMtOTU0NjI5NjYzMTRlXC9pbmNhbnRhdG9yZXh2LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bGBjWlagapMxIpczc1M2-VN_8bd1PlSYYmQBNeULRRE',
    title: 'Firiye Dao',
    artist: 'Miles'
  },
  {
    id: 12,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 13,
    albumArtUri: '',
    title: 'Ferari Mon',
    artist: 'Miles'
  },
  {
    id: 14,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2021/12/Portal-Album-Cover-PP1.jpg',
    title: 'Ek Nodi Jamuna',
    artist: 'James'
  },
  {
    id: 15,
    albumArtUri: 'https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg',
    title: 'Onneshon',
    artist: 'Nemesis'
  },
  {
    id: 16,
    albumArtUri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911f6fac-f50e-4d62-84a3-95462966314e/dckx8jk-f25a659a-1949-48c8-9604-45406c8ded50.jpg/v1/fill/w_894,h_894,q_70,strp/album_cover_design_for_ambient_band__free__by_incantatorexv_dckx8jk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWY2ZmFjLWY1MGUtNGQ2Mi04NGEzLTk1NDYyOTY2MzE0ZVwvZGNreDhqay1mMjVhNjU5YS0xOTQ5LTQ4YzgtOTYwNC00NTQwNmM4ZGVkNTAuanBnIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTExZjZmYWMtZjUwZS00ZDYyLTg0YTMtOTU0NjI5NjYzMTRlXC9pbmNhbnRhdG9yZXh2LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bGBjWlagapMxIpczc1M2-VN_8bd1PlSYYmQBNeULRRE',
    title: 'Firiye Dao',
    artist: 'Miles'
  },
  {
    id: 17,
    albumArtUri: '',
    title: 'Ferari Mon',
    artist: 'Miles'
  }
]




const LibraryScreen = (props: any) => {
  
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)  

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // You can adjust the threshold value based on your needs
    const threshold = 50;

    setIsHeaderSticky(offsetY > threshold);
  };

  
    
  return (

    <View style={style.mainContainer}>
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
        <View style={style.stickyHeader}>
          <CommonHeader title='Library' searchAction={() => props.navigation.navigate('Home')}></CommonHeader>
        </View>

        <FlatList
          style={style.mainList}
          data={mySongs}
          renderItem={({item}) => <SingleCardItem Song={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          numColumns={3}
          columnWrapperStyle={{flexWrap: 'wrap'}}
        />

        


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
  mainBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Ensure the header is above the regular content
  },
  mainList:{
    marginTop: 100,
    width: '100%'
  }

  
  
})

export default LibraryScreen;