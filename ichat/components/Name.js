import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const EnterName = ({ navigation }) => {
    return (
      <ImageBackground
        source={require("../assets/detailpage.jpg")}
        style={{ width: "100%", height: "100%"}}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 35,
              fontWeight: "900",
              color: "#fff",
              marginLeft: 30,
              marginTop: 60,
              marginBottom: 40,
            }}
          >
            Let's Start{"\n"}With Your{"\n"}Basic Information...
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 50,
              width: 850,
              marginHorizontal: 30,
              fontSize: 15,
              
            }}
            placeholder={"First Name"}
          />
          <View style={{ height: 20 }} />
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 50,
              width: 850,
              marginHorizontal: 30,
              fontSize: 15,
            }}
            placeholder={"Last Name"}
          />

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
            onPress={() => navigation.navigate("enterEmail")}
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
        </SafeAreaView>
      </ImageBackground>
    );
  };

  export default EnterName;