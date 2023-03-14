import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const ViewProfile = ({ navigation }) => {
    return(
        <ImageBackground
            source={require('../assets/viewProfile.jpg')}
            style={{ width: '100%', height: '100%' }}
        >
            <Text
                style={{
                    textAlign: "left",
                    fontSize: 35,
                    fontWeight: "900",
                    color: "#fff",
                    marginLeft: 30,
                    marginTop: 100,
                  }}
            >
                ARE YOU READY TO VIEW YOUR
            </Text>
            <Text
                style={{
                    textAlign: "left",
                    fontSize: 35,
                    fontWeight: "900",
                    color: "#efa006",
                    marginLeft: 30,
                    marginTop: 10,
                    }}
            >
                PROFILE?
            </Text>

            <View 
                style={{
                position: "absolute",
                right: 30,
                bottom: 30,
                flexDirection: "row",
            }}>
            <Text
                style={{
                    bottom: -10,
                    paddingRight: 10,
                    fontSize: 20,
                    color: "#fff",
                }}
            >
                Yes, take me away!
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("UserProfile")}
                style={{
                backgroundColor: "#23c0c0",
                borderRadius: 50,
                }}
            >   
                <AntDesign name="rightcircle" size={50} color="white" />
            </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default ViewProfile;