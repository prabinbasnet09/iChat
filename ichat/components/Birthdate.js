import React from 'react';
import {ImageBackground, TouchableOpacity, Text, TextInput, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const EnterBirthDate = ({ navigation }) => {
    return (
      <ImageBackground
        //source={require("./assets/birthdate.jpg")}
        source={require("../assets/birthdate.jpg")}
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
            onPress={() => navigation.navigate("enterHeight")}
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
            WHEN'S YOUR{"\n"}BIRTHDAY?
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 30, marginBottom: 30 }}>
            Don't worry, we won't share your information
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
                fontWeight: "bold",
                textAlign: "center",
                width: 95,
                height: 95,
                borderRadius: 50,
              }}
              keyboardType="numeric"
              maxLength={2}
              placeholder={"MONTH"}
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
                fontWeight: "bold",
                textAlign: "center",
                width: 95,
                height: 95,
                borderRadius: 50,
              }}
              keyboardType="numeric"
              maxLength={2}
              placeholder={"DAY"}
              placeholderTextColor="#fff"
              color="#fff"
            />
            <TextInput
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                width: 95,
                height: 95,
                borderRadius: 50,
              }}
              placeholder={"YEAR"}
              keyboardType="numeric"
              maxLength={4}
              placeholderTextColor="#fff"
              color="#fff"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };

  export default EnterBirthDate;