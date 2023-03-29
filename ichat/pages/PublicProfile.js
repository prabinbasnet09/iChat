import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  onPress,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

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

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/home.png")}
        style={{ width: "100%", height: "500%", top: 0 }}
      >
        <View>
          <Image
            source={require("../assets/publicProfile.png")}
            style={{
              width: "100%",
              height: 350,
              top: 50,
              alignContent: "center",
            }}
          />

          <TouchableOpacity>
            <Text
              style={[
                styles.profile,
                {
                  marginTop: -290,
                  marginLeft: 15,
                  color: "white",
                  fontWeight: "bold",
                },
              ]}
            >
              PROFILE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={[
                styles.accSetting,
                {
                  fontSize: 12,
                  marginLeft: 235,
                  marginTop: -290,
                  color: "white",
                  fontWeight: "bold",
                },
              ]}
            >
              ACCOUNT SETTINGS
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.profilePic, {}]}
            onPress={() => {
              pickImage();
            }}
          >
            {profilePicture ? (
              <Image
                style={[styles.profilePic, { marginTop: 100, marginLeft: 500 }]}
                source={{ uri: profilePicture }}
              />
            ) : (
              <Text style={{ color: "gray", fontSize: 30 }}>+</Text>
            )}
          </TouchableOpacity>
        </View>

        <AntDesign
          name="camera"
          size={20}
          color="black"
          style={{
            top: -12,
            left: 175,
            backgroundColor: "white",
            width: 25,
            height: 25,
            paddingTop: 2,
            paddingLeft: 2.7,
            borderRadius: 100,
            backgroundColor: "white",
          }}
        />

        <View style={styles.aboutMeContainer}>
          <TextInput style={styles.aboutMe} multiline={true} numberOfLines={6}>
            Hi this is me, Susie Little. I am 21 years old. {"\n"}I live in Las
            Vegas, Nevada. I go to Vegas Junior School. I love it there. It is
            good there. {"\n"}
            Welcome to iChat. This is my profile.{"\n"}
            More..
          </TextInput>
        </View>

        <View style={[styles.statusPost, { borderBottomColor: "#D3D3D3" }]}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
            }}
          />
          <TextInput
            style={[
              styles.status,
              {
                marginTop: 50,
                marginLeft: 20,
                marginBottom: 2,
                height: 30,
                paddingBottom: 5,
                borderBottomColor: "#f16777",
                borderBottomWidth: 0.4,
                width: "90%",
              },
            ]}
            multiline={true}
            numberOfLines={1}
            placeholder="SAY SOMETHING.."
            placeholderTextColor={"#feffff"}
          />

          <View style={[styles.shareOption, { flexDirection: "row" }]}>
            <Text
              style={[
                styles.share,
                {
                  fontSize: 12,
                  marginLeft: "60%",
                  marginTop: 5,
                  fontWeight: "bold",
                },
              ]}
            >
              SHARE TO:
            </Text>

            <TouchableOpacity style={[styles.socialMedia1, {}]}>
              <Icon
                name="facebook-square"
                size={18}
                color="#4267B2"
                borderRadius="100%"
                marginTop={3}
                marginLeft={8}
              />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialMedia2, {}]}>
              <Icon
                name="twitter-square"
                size={18}
                color="#1DA1F2"
                borderRadius="100%"
                marginTop={3}
                marginLeft={8}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={[
            styles.photoGrid,
            {
              marginTop: 10,
              marginLeft: "76%",
              fontWeight: "bold",
              color: "white",
            },
          ]}
        >
          PHOTOS
        </Text>

        <View
          style={[
            styles.photos,
            { marginTop: 10, flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Image
            source={require("../assets/girl1.jpg")}
            style={[
              styles.image,
              { width: "30%", height: 200, marginLeft: 10, borderRadius: 15 },
            ]}
          />

          <Image
            source={require("../assets/girl2.jpg")}
            style={[
              styles.image,
              { width: "30%", height: 200, marginLeft: 5, borderRadius: 15 },
            ]}
          />

          <Image
            source={require("../assets/boy3.jpg")}
            style={[
              styles.image,
              { height: 200, width: "30%", marginLeft: 5, borderRadius: 15 },
            ]}
          />
        </View>

        <View
          style={[
            styles.photos,
            {
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            },
          ]}
        >
          <Image
            source={require("../assets/boy1.jpg")}
            style={[
              styles.image,
              { width: "30%", height: 200, marginLeft: 10, borderRadius: 15 },
            ]}
          />

          <Image
            source={require("../assets/boy2.jpg")}
            style={[
              styles.image,
              {
                height: 200,
                width: "30%",
                height: 200,
                marginLeft: 5,
                borderRadius: 15,
              },
            ]}
          />

          <Image
            source={require("../assets/girl3.jpg")}
            style={[
              styles.image,
              { height: 200, width: "30%", marginLeft: 5, borderRadius: 15 },
            ]}
          />
        </View>

        <View style={[styles.navigationButtons, {}]}>
          <View style={styles.buttonOptions}>
            <TouchableOpacity
              onPress={onPress}
              style={[styles.lastButton, { marginLeft: 15 }]}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#00CDFE",
                  paddingTop: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                FRIENDS{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} style={styles.lastButton}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#00CDFE",
                  paddingTop: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                  textAlign: "center",
                  alignSelf: "center",
                  overflow: "scroll",
                }}
              >
                {" "}
                SAFETY ZONE{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} style={styles.lastButton}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#00CDFE",
                  paddingTop: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                CLUBS{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPress}
              style={[styles.lastButton, { marginRight: 15 }]}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#00CDFE",
                  paddingTop: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                HUDDLE{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profilePic: {
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
  },

  aboutMeContainer: {
    backgroundColor: "#24bfc1",
    marginTop: 15,
    marginLeft: 30,
    borderRadius: 10,
    padding: 10,
    width: "85%",
  },

  statusPost: {
    //position: 'absolute',
    height: 105,
    backgroundColor: "#e90923",
    marginTop: 15,
    marginLeft: 30,
    borderRadius: 10,
    marginBottom: 15,
    paddingBottom: 35,
    width: "85%",
  },

  navigationButtons: {
    flexDirection: " row",
    height: 110,
    width: "100%",
    marginTop: 10,
  },

  buttonOptions: {
    flexDirection: "row",
  },

  lastButton: {
    marginTop: 10,
    marginLeft: 9,
    backgroundColor: "white",
    padding: 10,
    alignContent: "center",
    width: 80,
    height: 35,
    borderRadius: 5,
  },
});

export default PublicProfile;
