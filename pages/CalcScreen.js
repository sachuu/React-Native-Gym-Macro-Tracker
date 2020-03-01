import React from 'react';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-paper';  
import {StyleSheet, Text, View,} from 'react-native';
import SwitchSelector from "react-native-switch-selector";

class subMacros{

  constructor(name){
    this.name = this.name
    this.total = 0
  }

  calcCalories(gender, weight, height, age){
    if(gender === 'm'){
      total = (((10*weight)+(6.25*height)-(5*age))+5)*1.2
    }
    else{
      total = (((10*weight)+(6.25*height)-(5*age))-161)*1.2
    }
    return total
  }
}

const calories = new subMacros("Calories")
const carbs = new subMacros("Carbs")
const fats = new subMacros("Fat")

function MacroForm(){
  state = {
    checked: 'first',
  };
  
  const { checked } = 'first';

  return(
    <View style = {{}}>
       <TextInput keyboardType = {"number-pad"}
        label = {"Age in years..."}
        onChangeText={{}}
        underlineColor = 'lightblue'
      />
       <TextInput
        label = {"Height in inches..."}
        onChangeText={{}}
        underlineColor = 'lightblue'
      />

      <TextInput 
        label = {"Weight in pounds..."}
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
          centerComponent={{ text: 'MACRO CALCULATOR', style: { color: '#fff', letterSpacing: 2 } }}
          containerStyle={{
            backgroundColor: '#5BC0EB',
          }}
        />
        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style = {{fontSize: 20, fontWeight: '100', padding: 10}}> Please Enter Info Below To Calculate Macro </Text>
        </View>
        <MacroForm/>

        <SwitchSelector style = {{padding: 20}}
          initial={0}
          onPress={value => this.setState({ gender: value })}
          textColor={'black'} 
          selectedColor={'white'}
          buttonColor={'#5BC0EB'}
          borderColor={'#5BC0EB'}
          hasPadding = {true}
      
          options={[
            { label: "Male", value: "m"},
            { label: "Female", value: "f"} 
          ]}
        />

        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style = {{fontWeight: 'normal', fontSize: 20, letterSpacing: 2}}> Macro You'd Like to Calculate: </Text>
        </View>

        <SwitchSelector style = {{padding: 20}}
          initial={0}
          onPress={value => this.setState({ gender: value })}
          textColor={'black'} 
          selectedColor={'white'}
          buttonColor={'#5BC0EB'}
          borderColor={'#5BC0EB'}
          hasPadding = {true}
      
          options={[
            { label: "Calories", value: "m"},
            { label: "Carbs", value: "f"},
            { label: 'Fats', value: 'fat'}
          ]}
        />

        <View style = {{flexDirection: 'row', justifyContent: 'center', padding: 30}}>
          <Text style = {{fontSize: 40}}>{calories.total}</Text>
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