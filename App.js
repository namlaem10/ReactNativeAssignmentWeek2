import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/img1.jpg') },
  { id: 2, imgSource: require('./assets/img2.jpg') },
  { id: 3, imgSource: require('./assets/img3.jpg') },
  { id: 4, imgSource: require('./assets/img4.jpg') },
  { id: 5, imgSource: require('./assets/img5.jpg') },
  { id: 6, imgSource: require('./assets/img6.jpg') },
  { id: 7, imgSource: require('./assets/img7.jpg') },
  { id: 8, imgSource: require('./assets/img8.jpg') },
  { id: 9, imgSource: require('./assets/img9.jpg') },
  { id: 10, imgSource: require('./assets/img10.jpg') },
  { id: 11, imgSource: require('./assets/img11.jpg') },
  { id: 12, imgSource: require('./assets/img12.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);
export default class Assignment_week2 extends Component {
  constructor(props) {
    super(props)
    this.state = { flw: "Follow" }
  }
  Press(){
    if(this.state.flw=="Follow"){
      alert("Following")
      this.setState({
        flw: "Following",
      })
    }
    else{
      alert("Unfollow")
      this.setState({
        flw: "Follow",
      })
    }
  }
  render(){
    return (
      <View style={styles.wrap}>
        <View style={styles.topGroup}>
          <Ionicons style={{marginLeft: 20}} name='md-arrow-round-back' size={27} color="gray" />
          <Feather style={{marginRight: 20}} name='menu' size={27} color="gray" />
        </View>
        <View style={styles.profileGroup}>
          <View style={styles.avatar}>
            <Image style={styles.imgAvatar} source={require('./assets/avatar.jpg')} />
          </View>
          <View style={styles.infoGroup}>
            <View>
              <Text style={styles.name}>Hoàng Nam</Text>
              <Text style={styles.job}>Developer</Text>
            </View>
            <View style={styles.follow}>
              <TouchableOpacity style={styles.btnFollow} onPress={()=>this.Press() }>
                <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>{this.state.flw}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnDirect} onPress={()=>alert("Send Message")}>
                <Ionicons name="md-send" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.followGroup}>
          <View style={styles.numberPhoto}>
            <Text style={{fontSize: 20, fontWeight: '400'}}>12</Text>
            <Text style={{color: 'gray'}}>Photos</Text>
          </View>
          <View style={styles.numberFollower}>
            <Text style={{fontSize: 20, fontWeight: '400'}}>200</Text>
            <Text style={{color: 'gray'}}>Followers</Text>
          </View>
          <View style={styles.numberFollowing}>
            <Text style={{fontSize: 20, fontWeight: '400'}}>250</Text>
            <Text style={{color: 'gray'}}>Following</Text>
          </View>
        </View>
        <View style={styles.imageGroup}>
          <ScrollView contentContainerStyle={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.images} >
              {imgData.slice(0,centerImgData).map(item=>{
                return <Image source={item.imgSource} style={{width: 170, height: 170, borderRadius:10, marginBottom: 5}} />;
              })}
            </View>
            <View style={styles.images}>
              {imgData.slice(centerImgData).map(item=>{
                return <Image source={item.imgSource} style={{width: 170, height: 170, borderRadius:10, marginBottom: 5, marginLeft: 5}} />;
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomGroup}>
          <Ionicons style={{marginLeft: 40}} name='md-home' size={27} color="gray" />  
          <Ionicons name='md-add-circle-outline' size={27} color="gray" />
          <Feather style={{marginRight: 40}} name='user' size={27} color="gray" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    fontFamily: 'sans-serif-thin',
  },
  topGroup: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  profileGroup: {
    flex: 0.22,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgAvatar: {
    width:120,
    height:120, 
    borderRadius:60,
  },
  infoGroup: {
    flex: 0.55,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  follow: {
    flexDirection: 'row',
  },
  btnFollow: {
    backgroundColor: FOLLOW_COLOR,
    width: 110,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',   
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24, 
  },
  btnDirect: {
    backgroundColor: SEND_MESSAGE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
  },
  job: {
    fontSize: 17,
    color: 'gray',
  },
  followGroup: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numberPhoto: {
    alignItems: 'center'
  },
  numberFollower: {
    alignItems: 'center'
  },
  numberFollowing: {
    alignItems: 'center'
  },
  imageGroup: {
    flex: 0.52,
  },
  images: {
    flexDirection: 'column',
  },
  bottomGroup: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});
