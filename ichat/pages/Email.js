import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";
import { setRecoveryEmail } from "../store";

const EnterEmail = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user.recoveryEmail);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleNextPress = () => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Email is valid
      navigation.navigate("enterBirthdate");
    } else {
      // Email is not valid
      Alert.alert("Invalid email", "Please enter a valid email address.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/emailpage.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
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
          onPress={() => {
            navigation.navigate("enterBirthdate");
            dispatch(setRecoveryEmail(email));
          }}
          style={{
            position: "absolute",
            right: 30,
            bottom: 30,
            backgroundColor: "white",
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
            color: "white",
            marginLeft: 30,
            marginTop: 100,
          }}
        >
          WHATS'S YOUR{"\n"}EMAIL ADDRESS?
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginLeft: 30,
            marginBottom: 50,
            color: "white",
            width: "50%",
          }}
        >
          We use this to recover your account.
        </Text>

        <TextInput
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            backgroundColor: "white",
            color: "#000",
            borderRadius: 50,
            marginHorizontal: 30,
            fontSize: 15,
          }}
          placeholder={"Add recovery email"}
          value={email}
          onChangeText={handleEmailChange}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EnterEmail;
