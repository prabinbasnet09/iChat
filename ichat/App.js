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
import Entry from "./pages/Entry";
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
  source={require("./assets/OpenImage.jpg")}
  style={{ width: "100%", height: "102%" }}
  resizeMode="cover">
            
            <View>
              <Text style = {{fontFamily: "Verdana", color:'#eee', padding:1, fontWeight :'bold', fontSize: 20, marginTop: "30%",
                              marginLeft: 85, color: "black"}}> 
              Welcome to iChat {"\n"} 
              </Text>
              <Text style = {{fontFamily: "Georgia", color:'white', padding:1, fontSize: 18, marginTop: "-5%",
                            marginLeft: 105}}>
              Globalize the world
              </Text>
            </View>

            <TouchableOpacity
            onPress={() => {
              navigation.navigate("Entry")  
            }}
            style={{
              position: "absolute",
              right: 30,
              bottom: 50,
              backgroundColor: "#fff",
              borderRadius: 50,
            }}
          >
            <Icon name="rightcircle" size={50} color="#000" />
        </TouchableOpacity>

      </ImageBackground> 
)

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
          <Stack.Screen name="Entry" component={Entry} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;




  