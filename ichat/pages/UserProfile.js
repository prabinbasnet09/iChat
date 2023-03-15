import React from 'react';
import {onPress, useState, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';


const UserProfile = (props) => {
 // const [description, setDescription] = useState('');

  return (
    <ScrollView>
      <ImageBackground 
            source={require('../assets/home.png')}
            style={{width: "100%", height: "100%"}}>

            <View style={[styles.top, {flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}]}>  
            
            
            {/*<TouchableOpacity onPress={props.onPress}>
            <Image style={{width:200, height: 200, marginLeft: '60%', marginTop: '2.5%', borderRadius: 100, resizeMode: 'cover',}} 
                   source={ require('../assets/viewProfile.png')} />
            </TouchableOpacity> */}

                <TouchableOpacity onPress={props.onPress}>
                  <View
                    style={{
                    marginLeft: '60%', marginTop: '2.5%',
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
                      source={require('../assets/viewProfile.png')}
                    />
                  </View>
                </TouchableOpacity>

            <TouchableOpacity style={[styles.settting, {fontWeight: 'bold', fontSize: 18, marginRight: 250, marginTop: '-8.5%'}]}>
            <Text style={[styles.settting, {color:'white', fontSize: 14, marginRight: 250, marginTop: '-8.5%'}]}>
              ACCOUNT SETTINGS <Icon name="cog" size={20} color="#4267B2" borderRadius='100%' marginTop={5} marginLeft={8} />   
            </Text>
            </TouchableOpacity>
            </View>

            <Text style ={styles.name}> Susie C. Little</Text>
            <Text style ={styles.subName}> Las Vegas, United States</Text>

            <View style = {styles.buttonContainer}>
              <TouchableOpacity onPress={onPress} style = {styles.button1}>
              <Text style = {{color:'#eee', padding:5, fontWeight :'bold'}}> PHOTOS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.button2}>
              <Text style = {{color:'#eee', padding:5, fontWeight :'bold'}}> CIRCLE OF FRIENDS </Text>
              </TouchableOpacity>
            </View> 

            <Swiper style={styles.photos} showsPagination={true}>
              <View style={styles.slide}>
                <Image source={require('../assets/girl1.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/boy1.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/girl2.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/girl3.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/boy2.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/boy3.jpg')} style={styles.image} />
              </View>
            </Swiper>

            <View>
            <TouchableOpacity onPress={onPress} style = {styles.button3}>
              <Text style = {{color:'#eee', padding:5, fontWeight :'bold'}}> ABOUT ME </Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.aboutMeContainer}>
            <TextInput style = {styles.aboutMe} 
            multiline = {true}
            numberOfLines= {4}>
             Hi this is me, Susie C. Little. {"\n"}
             I live in Las Vegas, Nevada. I go to Vegas Junior School. {"\n"}
             Welcome to iChat. This is my profile. I love to take pictures. {"\n"}
             More..
            </TextInput>

            </View>


            <View style={[styles.statusPost,{borderBottomColor: '#D3D3D3',}]}>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,}} />
            <TextInput 
              style={[styles.status, {paddingBottom: 15, borderBottomColor: 'white', borderBottomWidth: 0.4, width: '95%',}]} 
              multiline={true} 
              numberOfLines={1} 
              placeholder="SAY SOMETHING.."
              placeholderTextColor={'#00CDFE'} />

              <View style={[styles.shareOption, {flexDirection:'row'}]}>
                <Text style={[styles.share, {marginLeft: '85%', marginTop: 10, fontWeight: 'bold'}]}>
                  SHARE TO: 
                </Text>

                <TouchableOpacity style={[styles.socialMedia1, {}]}>             
                  <Icon name="facebook-square" size={20} color="#4267B2" borderRadius='100%' marginTop={5} marginLeft={8} />   
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialMedia2, {}]}>             
                  <Icon name="twitter-square" size={20} color="#1DA1F2" borderRadius='100%' marginTop={5} marginLeft={8} />                         
                </TouchableOpacity>

              </View>
            </View>

            
            {/*<View style={styles.container}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => setDescription(text)}
              value={description}
              style={styles.descriptionBox}
              placeholder="Enter your description here"
              //placeholderTextColor="#a9a9a9"
            />
  </View>*/}
            
          <View style = {styles.mainDiv}>
            <View style = {styles.insideDiv}>
            
            <View style = {styles.buttonOptions}>
            <TouchableOpacity onPress={onPress} style = {styles.lastButton1}>
              <Text style = {{color:'#00CDFE', paddingBottom:15, fontWeight :'bold', textAlign: 'center',}}> FRIENDS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton2}>
              <Text style = {{color:'#00CDFE', paddingBottom:15, fontWeight :'bold', textAlign: 'center', }}> LIFELINE </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton3}>
              <Text style = {{color:'#00CDFE', paddingBottom:10, fontWeight :'bold', textAlign: 'center'}}> CLUBS </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPress} style = {styles.lastButton4}>
              <Text style = {{color:'#00CDFE', paddingBottom:15, fontWeight :'bold', textAlign: 'center'}}> HUDDLE </Text>
              </TouchableOpacity>
            </View>  

              <Text style = {styles.insideText}>Hi this is another block. I don't know what is the purpose of it. {'\n'}Anyways it is here. </Text>
            </View> 
              
            <View style = {styles.iconContain}>
            <TouchableOpacity style={styles.note}>
             <View style = {styles.circle}>
             <Icon name="pencil-square-o" size={20} color="white" borderRadius='100%' marginTop={5} marginLeft={8} />
             </View>            
            </TouchableOpacity>
            </View>

              <Text style = {styles.secondLine}>
                  Hi this is a second line. {'\n'}
                  I again do not know the purpose of it. {'\n'}
                  Still I would like to thank you all. 
              </Text>
          </View>


      </ImageBackground>   
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  name: {
    marginTop: 10,
    marginLeft: '41%',
    fontSize: 50,
    color: 'white'
  },

  subName: {
    marginTop: 10,
    marginLeft: '45%',
    fontSize: 15,
    color: 'white'
  },

buttonContainer: {
flexDirection: 'row',
},

  button1: {
    marginLeft: 25,
    backgroundColor: '#D2042D',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 90,
    height: 50,
    
  },

  button2: {
    marginLeft: 15,
    backgroundColor: '#00CDFE',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 50,
  },

  button3: {
    marginLeft: 25,
    backgroundColor: '#363646',
    borderTopEndRadius: 15,
    padding: 10,
    alignContent: 'center',
    width: 150,
    height: 50,
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
    height: 625,
    marginLeft: 15,

  },

  image : {
    height :600,
    resizeMode: 'cover',
    borderTopLeftRadius: 0,
    borderRadius: 20,
    width: '90%',
    resizeMode: 'stretch',
  },

  aboutMeContainer: {
    //height: '50%',
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    //borderRadius: ,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 15,
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
    height:130,
    backgroundColor: '#363646',
    marginLeft: 15,
    borderRadius: 15,
    marginBottom: 15,
    width: '90%',    
  },

  status: {
    marginTop:55,
    marginLeft: 15,
    color: 'white',
    fontSize: 15,
  },


  mainDiv:{
    position: 'relative',
    height: 230,
    width: '90%',
    backgroundColor: '#D2042D',
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 20,
  },

  insideDiv: {
    position: 'absolute',
    top: '20%',
    backgroundColor: '#610C04',
    height: 90,
    width: '100%',
    
  },

  buttonOptions :{
    flexDirection: 'row',

  },

  lastButton1: {
    marginTop: -25,
    marginLeft: 95,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 15,
  },

  lastButton2: {
    marginTop: -25,
    marginLeft: 105,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 15,
  },

  lastButton3: {
    marginTop: -25,
    marginLeft: 105,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 15,
  },

  lastButton4: {
    marginTop: -25,
    marginLeft: 105,
    backgroundColor: 'white',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 15,
  },

  insideText : {
    paddingTop : 15,
    textAlign: 'center',    
    color: '#FFFFFF',

  },

  secondLine : {
    paddingTop : 15,
    textAlign: 'center', 
    paddingTop: 160,
    color: '#FFFFFF',
   
  },

  circle : {
    backgroundColor :'gray',
    height: 30,
    width: 35,
    borderRadius: '100%',
    alignContent: 'center',
  },

  iconContain:{
    height: 10,
    width: 5,
    position: 'absolute',
    marginLeft: "50%",
    marginTop: '10%',
    borderRadius: '100%',
    alignContent: 'center',
  },

});

export default UserProfile;
