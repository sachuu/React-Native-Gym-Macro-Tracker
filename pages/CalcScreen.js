import * as React from 'react';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-paper';  
import RNPickerSelect from 'react-native-picker-select';
import SwitchSelector from "react-native-switch-selector";

import {Platform, StyleSheet, Text, View, StatusBar, Button} from 'react-native';

function MacroForm(){
  state = {
    checked: 'first',
  };
  
  const { checked } = 'first';

  return(
    <View style = {{}}>
       <TextInput
        label = {"Age in years"}
        onChangeText={{}}
        underlineColor = 'lightblue'
      />
       <TextInput
        label = {"Height in inches"}
        onChangeText={{}}
        underlineColor = 'lightblue'
      />

      <TextInput 
        label = {"Weight in pounds"}
        onChangeText={{}}
        underlineColor = 'lightblue'
      />
    </View>
  )
}

class CalcScreen extends React.Component { 
  state = {
    checked: 'first',
  };

  render() {  

    //Form Data Variables

    const { checked } = this.state;

    return (  
      <View> 
        <Header
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <MacroForm/>

        <SwitchSelector style = {{padding: 10}}
          initial={0}
          onPress={value => this.setState({ gender: value })}
          textColor={'black'} 
          selectedColor={'white'}
          buttonColor={'lightblue'}
          borderColor={'lightblue'}
          hasPadding = {true}
      
          options={[
            { label: "Male", value: "m"},
            { label: "Female", value: "f"} 
          ]}
        />
      
        <View style = {{margin: 10}}>
        <Text> Please Select Macro: </Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
              { label: 'Calories', value: 'Calories' },
              { label: 'Carbs', value: 'Carbs' },
              { label: 'Fats', value: 'Fats' },
          ]}
        />
        </View> 

      </View>
    );  
  }  
}  

const styles = StyleSheet.create({
  bar: {
    justifyContent: 'flex-start',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default CalcScreen;