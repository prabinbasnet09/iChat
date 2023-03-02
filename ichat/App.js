import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ImageBackground, ImageBase } from 'react-native';

const loginImage = require('./assets/login.jpg');

export default function App() {
  return (

      <View style={styles.container}>
      <ImageBackground source={loginImage} style={{ flex: 1 }}>
        <Text style={styles.textStyle}></Text>
        <View style={styles.logInButtonContainer}>
          <View style={styles.logInButton}>
            <Button
              onPress={() => console.log('Log In')}
              title="Log in"
              color="#841584"
            />
          </View>
          <View style={styles.logInButton}>
            <Button
              onPress={() => console.log('Sign Up')}
              title="Sign Up"
              color="#841584"
            />
          </View>
        </View>
        <StatusBar style="auto" />
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa80f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'sans-serif-condensed',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 200,
    marginRight: 200,
  },
  logInButtonContainer: {
    marginTop: 50,
  },
  logInButton: {
    padding: 10,
  },
});