import React from "react";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

const Stack = createStackNavigator();

const AppButton = ({ onPress, title, backgroundColor, textColor }) => (
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

const EnterName = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/detailpage.jpg")}
      style={{ width: "100%", height: "100%" }}
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
          LET'S START{"\n"}WITH YOUR{"\n"}FIRST NAME...
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
          placeholder={"First Name"}
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

const EnterBirthDate = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/birthdate.jpg")}
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
              fontSize: 8,
              fontWeight: "bold",
              width: 71,
              height: 71,
              borderRadius: 50,
            }}
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
              fontSize: 8,
              fontWeight: "bold",
              width: 71,
              height: 71,
              borderRadius: 50,
            }}
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
              paddingHorizontal: 25,
              fontSize: 8,
              fontWeight: "bold",
              width: 71,
              height: 71,
              borderRadius: 50,
            }}
            placeholder={"Year"}
            placeholderTextColor="#fff"
            color="#fff"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="enterName" component={EnterName} />
        <Stack.Screen name="enterEmail" component={EnterEmail} />
        <Stack.Screen name="enterBirthdate" component={EnterBirthDate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
