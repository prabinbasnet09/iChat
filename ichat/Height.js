import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const EnterHeight = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/emailpage.jpg")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
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
            color: "#000",
            marginLeft: 30,
            marginTop: 60,
          }}
        >
          What's Your{"\n"}Height in feet?
        </Text>
        <Text style={{ fontSize: 10, marginLeft: 30, marginBottom: 30 }}>
        </Text>
        <View style={{
          flexDirection: "row",
        }}>
          <TextInput
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 50,
              marginLeft: 30,
              paddingVertical: 10,
              paddingHorizontal: 19,
              fontSize: 14,
              textAlign: 'center',
              fontWeight: "bold",
              width: 95,
              height: 95,
              borderRadius: 50,
            }}
            keyboardType = "number-pad"
            placeholder={"Feet"}
            placeholderTextColor="#fff"
            color="#fff"
          />
          <TextInput
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 50,
              marginHorizontal: 20,
              paddingVertical: 10,
              paddingHorizontal: 26,
              fontSize: 14,
              textAlign: 'center',
              fontWeight: "bold",
              width: 95,
              height: 95,
              borderRadius: 50,
            }}
            placeholder={"Inches"}
            placeholderTextColor="#fff"
            color="#fff"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EnterHeight;
