import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PublicProfile = () => {
    return (
        <View>
            <ImageBackground
                source={require('../assets/publicProfile.jpg')}
                style={{ width: '100%', height: '70%' }}
            >
                <View 
                    style={{
                        top: 30,
                        flexDirection: "row",
                        alignItems: "space-between",
                        justifyContent: "space-between"
                    }}
                >
                    <Text 
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#fff",
                            marginLeft: 15,
                        }}
                    >PROFILE</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#fff",
                            marginRight: 15,
                        }}
                    >ACCOUNT SETTINGS</Text>
                </View>
            </ImageBackground>

            <LinearGradient
                colors={['#ffffff', '#000000']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                {/* Your content goes here */}
            </LinearGradient>
        </View>
    )
}

export default PublicProfile;