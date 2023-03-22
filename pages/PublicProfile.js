import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
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
  });

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/publicProfile.png")}
        style={{ width: "100%", height: "80%" }}
      >
        <View
          style={{
            top: 10,
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "space-between",
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

        <TouchableOpacity
              style={{
                top: 270,
                left: 30,
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
                  source={{ uri: profilePicture}}
                  style={{ width: 85, height: 94, borderRadius: 10 }}
                />
              ) : (
                <Text style={{ color: "gray", fontSize: 30 }}>+</Text>
              )}
              
            </TouchableOpacity>
            
            <AntDesign name="camera" size={20} color="black" style = {{
              top: 250,
              left: 80,
              backgroundColor: "white",
              width: 25,
              height: 25,
              paddingTop: 2,
              paddingLeft: 2,
              borderRadius: 50,
            }} />
      </ImageBackground>
      <View style={styles.container}>
    </View>
    </SafeAreaView>
  );
};

export default PublicProfile;