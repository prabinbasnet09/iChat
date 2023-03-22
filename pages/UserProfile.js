import React from 'react';
import {onPress, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';

const UserProfile = (props) => {
 const user = useSelector(state => state.user);

  return (

    <ScrollView>
      
      <ImageBackground 
            source={require('../assets/home.png')}
            style={{width: "100%", height: "100%"}}>

            <View style={[styles.top, {flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}]}>  

                <TouchableOpacity onPress={props.onPress}>
                  <View
                    style={{
                    marginLeft: '30%', marginTop: 50,
                    width: 200,
                    borderWidth: 2,
                    borderColor: 'transparent',
                    borderColor: 'white',
                    borderRadius: 100,
                    overflow: 'hidden',
                    resizeMode: 'cover'
                    
                    }}>
                  <Image
                    style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                    }}
                      source={{ uri: user.photos[0].image }}
                    />
                  </View>
                </TouchableOpacity>

            <TouchableOpacity style={[styles.settting, {fontWeight: 'bold', fontSize: 18, marginRight: 250, marginTop: '-8.5%'}]}>
            <Text style={[styles.settting, {color:'white', fontSize: 8, marginRight: 5, marginTop: '-30.5%'}]}>
            <Icon name="cog" size={20} color="#4267B2" borderRadius='100%' marginTop={-1} marginLeft={8} />   
            </Text>
            </TouchableOpacity>
            </View>

            <Text style ={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style ={styles.subName}> Las Vegas, United States</Text>
            
            <View style = {styles.buttonContainer}>
              <TouchableOpacity onPress={onPress} style = {styles.button1}>
              <Text style = {{color:'#eee', padding:1, fontWeight :'bold', fontSize: 12}}> PHOTOS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.button2}>
              <Text style = {{color:'#eee', padding:1, fontWeight :'bold', fontSize: 12}}> CIRCLE OF FRIENDS </Text>
              </TouchableOpacity>
            </View> 

            <Swiper style={styles.photos} showsPagination={true}>
              {
                user.photos.map((image, id) => {
                  return (
                    <View key={id} style={styles.slide}>
                      {
                        image ? 
                        <Image source={{ uri: image.image }} style={styles.image} /> :
                        <Image source={require('../assets/viewProfile.png')} style={styles.image} />
                      }
                    </View>
                  )
                })
              }

            </Swiper>

            <View>
            <TouchableOpacity onPress={onPress} style = {styles.button3}>
              <Text style = {{fontSize:12, color:'#eee', fontWeight :'bold'}}> ABOUT ME </Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.aboutMeContainer}>
            <TextInput style = {styles.aboutMe} 
            multiline = {true}
            numberOfLines= {4}>
             Hi this is me, Susie C. Little. {"\n"}
             I live in Las Vegas, Nevada. I go to Vegas Junior School. {"\n"}
             Welcome to iChat. This is my profile.{"\n"}
             More..
            </TextInput>

            </View>


            <View style={[styles.statusPost,{borderBottomColor: '#D3D3D3',}]}>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,}} />
            <TextInput 
              style={[styles.status, {marginTop: 10, marginBottom:2, height:60, paddingBottom: 5, borderBottomColor: 'white', borderBottomWidth: 0.4, width: '92%', textAlignVertical: 'bottom',}]} 
              multiline={true} 
              numberOfLines={2} 
              placeholder="SAY SOMETHING.."
              placeholderTextColor={'#00CDFE'}
               />

              <View style={[styles.shareOption, {flexDirection:'row'}]}>
                <Text style={[styles.share, {fontSize:12, marginLeft: '65%', marginTop: 5, fontWeight: 'bold'}]}>
                  SHARE TO: 
                </Text>

                <TouchableOpacity style={[styles.socialMedia1, {}]}>             
                  <Icon name="facebook-square" size={18} color="#4267B2" borderRadius='100%' marginTop={3} marginLeft={8} />   
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialMedia2, {}]}>             
                  <Icon name="twitter-square" size={18} color="#1DA1F2" borderRadius='100%' marginTop={3} marginLeft={8} />                         
                </TouchableOpacity>

              </View>
            </View>

            
          <View style = {styles.mainDiv}>
            <View style = {styles.insideDiv}>
            
            <View style = {styles.buttonOptions}>
            <TouchableOpacity onPress={onPress} style = {styles.lastButton1}>
              <Text style = {{fontSize:12, color:'#00CDFE', paddingTop:3, fontWeight :'bold', textAlign: 'center',}}> FRIENDS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton2}>
              <Text style = {{fontSize:12, color:'#00CDFE', paddingTop:3, fontWeight :'bold', textAlign: 'center', }}> LIFELINE </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton3}>
              <Text style = {{fontSize:12, color:'#00CDFE', paddingTop:3, fontWeight :'bold', textAlign: 'center'}}> CLUBS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton4}>
              <Text style = {{fontSize:12, color:'#00CDFE', paddingTop:3, fontWeight :'bold', textAlign: 'center'}}> HUDDLE </Text>
              </TouchableOpacity>
            </View>  

              <View style = {[styles.upperContainer, {height: 250}]}>
              <Text style = {styles.insideText}>Hi this is another block. The note icon below indicates you can edit it. {'\n'}Let's enjoy this app. </Text>
              </View>
            </View> 
              
            <View style = {styles.iconContain}>
            <TouchableOpacity style={styles.note}>
             <View style = {styles.circle}>
             <Icon name="pencil-square-o" size={20} color="white" borderRadius='100%' marginTop={5} marginLeft={8} />
             </View>            
            </TouchableOpacity>
            </View>

              <Text style = {styles.secondLine}>
                  {'\n'}Hi you can edit friend list. {'\n'}
                  You can also view your status. {'\n'}
                  Oops!! There are more features.  
              </Text>
          </View>


      </ImageBackground>   
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  name: {
    marginTop: 10,
    marginLeft: '35%',
    fontSize: 22,
    color: 'white'
  },

  subName: {
    marginTop: 10,
    marginLeft: '32%',
    fontSize: 15,
    color: 'white'
  },

buttonContainer: {
flexDirection: 'row',
marginTop: 25,
},

  button1: {
    marginLeft: 15,
    backgroundColor: '#D2042D',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 90,
    height: 35,
    
  },

  button2: {
    marginLeft: 15,
    backgroundColor: '#00CDFE',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 150,
    height: 35,
  },

  button3: {
    marginLeft: 15,
    backgroundColor: '#363646',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 110,
    height: 35,
  },

  container: {
    marginVertical: 10,
  },

  descriptionBox: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    height: 100,
  },

  photos: {
    height: 425,
    marginLeft: 10,

  },

  image : {
    height :400,
    resizeMode: 'cover',
    borderTopLeftRadius: 0,
    borderRadius: 20,
    width: '95%',
    resizeMode: 'cover',
  },

  aboutMeContainer: {
    //height: '50%',
    width: '95%',
    borderWidth: 1,
    borderColor: '#ccc',
    //borderRadius: ,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 10,
 
    backgroundColor: 'white',
    marginBottom: 15
  },

  aboutMe: {
    //borderRadius: 50,
    marginTop: 5,
    height: 100,
    padding: 15,   
    textAlign: 'center',
  },

  statusPost:{
    //position: 'absolute',
    height:105,
    backgroundColor: '#363646',
    marginLeft: 10,
    borderRadius: 15,
    marginBottom: 15,
    paddingBottom: 35,
    width: '95%',    
  },

  status: {
    marginTop:55,
    marginLeft: 15,
    color: 'white',
    fontSize: 15,
  },


  mainDiv:{
    position: 'relative',
    height: 270,
    width: '95%',
    backgroundColor: '#D2042D',
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 20,
  },

  insideDiv: {
    position: 'absolute',
    top: '13%',
    backgroundColor: '#610C04',
    height: 110,
    width: '100%',
    
  },

  buttonOptions :{
    flexDirection: 'row',

  },

  lastButton1: {
    marginTop: -20,
    marginLeft: 9,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 80,
    height: 35,
    borderRadius: 15,
  },

  lastButton2: {
    marginTop: -20,
    marginLeft: 5,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 80,
    height: 35,
    borderRadius: 15,
  },

  lastButton3: {
    marginTop: -20,
    marginLeft: 5,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 80,
    height: 35,
    borderRadius: 15,
  },

  lastButton4: {
    marginTop: -20,
    marginLeft: 5,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 80,
    height: 35,
    borderRadius: 15,
  },

  insideText : {
    height: 150,
    paddingTop : 15,
    textAlign: 'center',    
    color: '#FFFFFF',
    padding: 5,

  },

  secondLine : {
    padding : 15,
    textAlign: 'center', 
    paddingTop: 160,
    color: '#FFFFFF',
   
  },

  circle : {
    backgroundColor :'gray',
    height: 30,
    width: 35,
    borderRadius: 100,
    alignContent: 'center',
  },

  iconContain:{
    height: 10,
    width: 5,
    position: 'absolute',
    marginLeft: "45%",
    marginTop: '37%',
    borderRadius: 100,
    alignContent: 'center',
  },

});

const lightTheme = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff',
  },
  textColor: {
    color: '#000',
  },
});

const darkTheme = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#000',
  },
  textColor: {
    color: '#fff',
  },
});


export default UserProfile;
