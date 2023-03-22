import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import EnterName from "./pages/Name";
import EnterEmail from "./pages/Email";
import EnterBirthDate from "./pages/Birthdate";
import FourPhotos from "./pages/FourPhotos";
import ViewProfile from "./pages/ViewProfile";
import UserProfile from "./pages/UserProfile";
import PublicProfile from "./pages/PublicProfile";
import * as Font from "expo-font";

import { Provider } from "react-redux";
import {store} from "./store";

const Stack = createStackNavigator();

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

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/home.png")}
      style={{ width: "100%", height: "102%" }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./assets/logo.png")}
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
    </ImageBackground>
  );
};


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Helvetica": require("./assets/Helvetica-Font/Helvetica.ttf"),
      });
      setFontsLoaded(true);
    }
  
    loadFonts();
  }, []);
  
  if(!fontsLoaded) return (<View></View>)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="enterName" component={EnterName} />
          <Stack.Screen name="enterEmail" component={EnterEmail} />
          <Stack.Screen name="enterBirthdate" component={EnterBirthDate} />
          <Stack.Screen name="FourPhotos" component={FourPhotos} />
          <Stack.Screen name="ViewProfile" component={ViewProfile} />
          <Stack.Screen name = "UserProfile" component={UserProfile} />
          <Stack.Screen name="PublicProfile" component={PublicProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
