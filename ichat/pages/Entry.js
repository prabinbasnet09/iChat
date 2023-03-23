import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export const AppButton = ({ onPress, title, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        elevation: 2,
        backgroundColor: `${backgroundColor}`,
        textAlign: "center",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: 350,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          width: "60%",
          marginHorizontal: "auto",
          alignSelf: "center",
          fontSize: 12,
          color: `${textColor}`,
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "Helvetica",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

const Entry = ({navigation}) => {
    //const dispatch = useDispatch();
  return (
        <ImageBackground
          source={require("../assets/home.png")}
          style={{ width: "100%", height: "102%" }}
          resizeMode="cover"
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 120, height: 120, marginBottom: 50 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                textAlign: "center",
                fontWeight: "900",
                marginBottom: 130,
                width: 300,
              }}
            >
              THE HOTTEST SOCIAL MEDIA APP FOR CHILDREN {"&"} ADULTS!{" "}
            </Text>
            <AppButton
              title={
                <>
                  <Icon name="apple1" size={20} color="#fff" />
                  {"  "}
                  continue with apple
                </>
              }
              onPress={() => navigation.navigate("enterName")}
              backgroundColor={"#000"}
              textColor={"#fff"}
            />
            <AppButton
              title={
                <>
                  <Icon name="facebook-square" size={20} color="#fff" />
                  {"  "}
                  continue with facebook
                </>
              }
              onPress={() => navigation.navigate("enterName")}
              backgroundColor={"#3b5998"}
              textColor={"#fff"}
            />
            <AppButton
              title={
                <>
                  <Icon name="google" size={20} color="red" />
                  {"  "}
                  continue with google
                </>
              }
              onPress={() => navigation.navigate("enterName")}
              backgroundColor={"#fff"}
              textColor={"#000"}
            />
            <AppButton
              title={
                <>
                  <Icon name="phone" size={20} color="#000" />
                  {"  "}
                  use cell phone number
                </>
              }
              onPress={() => navigation.navigate("enterName")}
              backgroundColor={"#fff"}
              textColor={"#000"}
            />
    
            <Text
              style={{
                color: "#fff",
                marginTop: 20,
                fontSize: 10,
                paddingHorizontal: 70,
                textAlign: "center",
              }}
            >
              By signing up, you agree to our Terms. See how we use your data in our
              Privacy Policy. We never post to Facebook{" "}
            </Text>
            <Text
              style={{
                color: "#fff",
                marginTop: 20,
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              Parents Permissions
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              left: 10,
              top: 60,
            }}
          >
            <Icon name="left" size={30} color="white" />
          </TouchableOpacity>
        </ImageBackground>
      ); 
  
};

export default Entry;
