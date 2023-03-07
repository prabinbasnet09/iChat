import React from 'react';
import {ImageBackground, TouchableOpacity, Text, TextInput, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const EnterEmail = ({ navigation }) => {
    return (
      <ImageBackground
        source={require("./assets/emailpage.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              left: 10,
              top: 60,
            }}
          >
            <Icon name="left" size={30} color="#000" />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate("enterBirthdate")}
            style={{
              position: "absolute",
              right: 30,
              bottom: 30,
              backgroundColor: "#fff",
              borderRadius: 50,
            }}
          >
            <Icon name="rightcircle" size={50} color="#000" />
          </TouchableOpacity>
  
          <Text
            style={{
              textAlign: "left",
              fontSize: 35,
              fontWeight: "900",
              color: "#fff",
              marginLeft: 30,
              marginTop: 60,
            }}
          >
            WHATS'S YOUR{"\n"}EMAIL ADDRESS?
          </Text>
  
          <Text style={{ fontSize: 10, marginLeft: 30, marginBottom: 50 }}>
            We use this to recover your account.
          </Text>
  
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 50,
              marginHorizontal: 30,
              fontSize: 15,
            }}
            placeholder={"Add recovery email"}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };

  export default EnterEmail;