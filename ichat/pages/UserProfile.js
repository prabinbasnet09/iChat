import React from 'react';
import {onPress, useState, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';


const UserProfile = (props) => {
 // const [description, setDescription] = useState('');

  return (
    <ScrollView>
      <ImageBackground 
            source={require('../assets/home.png')}
            style={{width: "100%", height: "100%"}}>
            <TouchableOpacity onPress={props.onPress}>
            <Image style={{width:200, height: 200, marginLeft: '45%', marginTop: '2.5%', borderRadius: 100, resizeMode: 'cover',}} 
                   source={ require('../assets/viewProfile.jpg')} />
            </TouchableOpacity>

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
                <Image source={require('../assets/login.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/detailpage.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/emailpage.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/login.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/detailpage.jpg')} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={require('../assets/viewProfile.jpg')} style={styles.image} />
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
             I live in Monroe, Louisiana. I go to ULM. {"\n"}
             Welcome to iChat. This is my profile. 
            </TextInput>

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
    backgroundColor: 'red',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 90,
    height: 50,
    
  },

  button2: {
    marginLeft: 15,
    backgroundColor: '#00CDFE',
    //borderRadius: 10,
    padding: 10,
    alignContent: 'center',
    width: 180,
    height: 50,
  },

  button3: {
    marginLeft: 25,
    backgroundColor: 'brown',
    //borderRadius: 10,
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
    height: 700,
    marginLeft: 15,

  },

  image : {
    height :600,
    resizeMode: 'cover',
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
    padding: 15,
    
  },

});

export default UserProfile;
