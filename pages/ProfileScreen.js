import React from 'react';  
import {Header} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';  

class ProfileScreen extends React.Component { 
  render() {  
    return (  
      <View>
        <Header
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
      </View>
    );  
  }  
}  


const styles = StyleSheet.create({
  bar: {
    justifyContent: 'flex-start',
  },
  card: {
    flex: 1,
    justifyContent: 'center', 
  },
});

export default ProfileScreen;