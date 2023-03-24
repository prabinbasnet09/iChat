import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  onPress, TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

const PublicProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const pickImage = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
      .then((result) => {
        if (result && !result.canceled) {
          setProfilePicture(result.assets[0].uri);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
    aboutMeContainer: {
      backgroundColor: "#24bfc1",
      marginTop: -350,
      marginLeft: 30,
      borderRadius: 10,
      width: '85%',
      //zIndex: 
    },
    aboutMe: {
      padding: 15,
      paddingTop: 10,
    },
    statusPost:{
      //position: 'absolute',
      height:105,
      backgroundColor: '#e90923',
      marginTop: 15,
      marginLeft: 30,
      borderRadius: 10,
      marginBottom: 15,
      paddingBottom: 35,
      width: '85%',
    },
  })


  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/home.png")}
        style={{ width: "100%", height: "120%" }}
      >
        <View>
        <View
          style={{
            top: 10,
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#fff",
              marginLeft: 15,
            }}
          >
            PROFILE
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#fff",
              marginRight: 5,
            }}
          >
            ACCOUNT SETTINGS
          </Text>
        </View>
            <ImageBackground
            source={require("../assets/publicProfile.png")}
            style={{ width: "100%", height: "70%", top:-18 }}
            >

<TouchableOpacity
              style={{
                top: 290,
                left: 130,
                backgroundColor: "white",
                borderRadius: 10,
                border: 5,
                borderColor: "white",
                width: 90,
                height: 100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                pickImage();
              }}
            >
              
              {profilePicture ? (
                <Image
                  style={styles.profilePic}
                  source={{ uri: profilePicture}}
                  
                />
              ) : (
                <Text style={{ color: "gray", fontSize: 30 }}>+</Text>
              )}
              
              
            </TouchableOpacity>
            
            <AntDesign name="camera" size={20} color="black" style = {{
              top: 270,
              left: 160,
              backgroundColor: "white",
              width: 25,
              height: 25,
              paddingTop: 2,
              paddingLeft: 2.7,
              borderRadius: 50,
              backgroundColor: "red"
            }} />

            </ImageBackground>
        </View>
           

      <View style = {styles.aboutMeContainer}>
            <TextInput style = {styles.aboutMe} 
            multiline = {true}
            numberOfLines= {6}>
             Hi this is me, Susie Little. I am 21 years old.  {"\n"}
             I live in Las Vegas, Nevada. I go to Vegas Junior School. I love it there. It is good there. {"\n"}
             Welcome to iChat. This is my profile.{"\n"}
             More..
            </TextInput>
            </View>

            <View style={[styles.statusPost,{borderBottomColor: '#D3D3D3',}]}>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,}} />
            <TextInput 
              style={[styles.status, {marginTop: 50, marginLeft: 20, marginBottom:2, height:30, paddingBottom: 5, borderBottomColor: 'white', borderBottomWidth: 0.4, width: '90%',}]} 
              multiline={true} 
              numberOfLines={1} 
              placeholder="SAY SOMETHING.."
              placeholderTextColor={'white'}
               />

              <View style={[styles.shareOption, {flexDirection:'row'}]}>
                <Text style={[styles.share, {fontSize:12, marginLeft: '60%', marginTop: 5, fontWeight: 'bold'}]}>
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

      </ImageBackground>
      
    </SafeAreaView>
  );
};



export default PublicProfile;