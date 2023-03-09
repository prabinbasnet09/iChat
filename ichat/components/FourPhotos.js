import React, {useState} from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Image, StyleSheet, Button } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';
import { AppButton } from '../App';

function AddFacebookButton({ label, onPress}) {
    return (
        <TouchableOpacity
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            elevation: 5,
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: 30,
            paddingVertical: 5,
            paddingHorizontal: 3,
            width: 350,
            marginBottom: 10,
          }}
            onPress={onPress}
            >
                <Text  style={{
                    width: "60%",
                    marginHorizontal: "auto",
                    paddingVertical: 5,
                    paddingLeft: 10,
                    alignSelf: "center",
                    fontSize: 12,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: 15,
                    fontFamily: "Helvetica",
                }}>{label}</Text>

                <Icon name="facebook" size={25} color="#1977f2" 
                style={{
                    paddingRight: 10,
                    borderRadius: 50,
                }}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });

const FourPhotos = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result  = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/fourPhotos.jpg')}
            style={{ width: '100%', height: '100%' }}
        >
            
            <View style={styles.container}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("FourPhotos")}
                style={{
                position: "absolute",
                right: 30,
                bottom: 30,
                backgroundColor: "#fff",
                borderRadius: 50,
                }}
            >
                <AntDesign name="rightcircle" size={50} color="#000" />
            </TouchableOpacity>
            
            <View
                style={{    flex: 1, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            position: "absolute",
                            bottom: 250,
                            left: 30,
                             }}>
                <AddFacebookButton label="Add From Facebook" onPress={() => navigation.navigate("FourPhotos")} />
            </View>

            <View style={{
                position: "absolute",
                bottom: 100,
                left: 10,
            }}>
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
                    ADD YOUR FIRST{"\n"}4 PHOTOS?
                </Text>

                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginLeft: 30,
                    color: '#fff',
                    width : '50%'
                    }}>
                        Not sure what to upload?.
                </Text>

                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginLeft: 30,
                    color: '#fff',
                    width : '50%',
                    textDecorationLine: 'underline',
                    }}>
                        Checkout our guidelines
                </Text>
            </View>

        </ImageBackground>
    )
}

export default FourPhotos;