import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch} from 'react-redux';
import { setFirstName, setLastName } from '../store';

const EnterName = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const [startName, setStartName] = useState(user.firstName);
  const [surname, setSurname] = useState(user.lastName);
  const dispatch = useDispatch();

  const handleFirstName = (text) => {
    setStartName(text);
  };

  const handleLastName = (text) => {
    setSurname(text);
  };

    return (
      <View
        style={{backgroundColor: "#24bfc1", width: "100%", height: "100%"}}
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
              marginTop: 100,
              marginBottom: 40,
            }}
          >
            Let's Start With Your Name
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 50,
              width: '85%',
              marginHorizontal: 30,
              fontSize: 15,
              
            }}
            value={startName}
            placeholder={"First Name"}
            onChangeText={handleFirstName}
          />
          <View style={{ height: 20 }} />
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 50,
              width: '85%',
              marginHorizontal: 30,
              fontSize: 15,
            }}
            value={surname}
            placeholder={"Last Name"}
            onChangeText={handleLastName}
          />
          <Text style = {{fontSize: 12, marginTop: 12, marginLeft: 50, color: "#454545"}}>This will be shown in your profile</Text>

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
              navigation.navigate("enterEmail");
              dispatch(setFirstName(startName));
              dispatch(setLastName(surname));
            }}
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
      </View>
    );
  };

  export default EnterName;