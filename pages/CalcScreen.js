import React, {useState} from 'react';
import { Formik } from 'formik';
import {Header} from 'react-native-elements';
import {TextInput, DataTable} from 'react-native-paper';  
import {StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import SwitchSelector from "react-native-switch-selector";

global.currGender = 'm'
global.currMacro = 'm'

function calcMacro(age, weight, height){
  var macroTotal = 0
  if(global.currMacro = 'calories'){
    if(global.currGender === 'm'){
      macroTotal = (((6.07678*weight)+(12.18946*height)-(5.7*age))+88.362)*1.2
    }
    else{
      macroTotal = (((4.19437*weight)+(7.8689*height)-(4.3*age))+447.593)*1.2
    }
    return macroTotal.toFixed(0)
  }
}

function MacroForm(){
  const [total, setTotal] = useState(0);
  const[subMacros, setSubMacros] = useState([
    {
      age: 0,
    }
  ])
  return(
    <View>
      <Formik
        initialValues = {{ Age: '', Weight: '', Height: ''}}
        onSubmit = {values => setTotal(calcMacro(parseInt(values.Age,10), parseInt(values.Weight,10), parseInt(values.Height,10)))}
      >
        {({handleChange, handleSubmit, values}) => (
          <View>
            <TextInput
              placeholder = {'Enter your age here'}
              onChangeText = {handleChange('Age')}
              value={values.Age}
            />
            <TextInput
              placeholder = {'Enter your weight here (lb)'}
              onChangeText = {handleChange('Weight')}
              value={values.Weight}
            />
            <TextInput
              placeholder = {'Please enter your height here (inches)'}
              onChangeText = {handleChange('Height')}
              value={values.Height}
            />

            <SwitchSelector style = {{padding: 20}}
              initial={0}
              onPress={value => global.currGender = value}
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

            <SwitchSelector style = {{padding: 20}}
              initial={0}
              onPress={value => global.currMacro = value}
              textColor={'black'} 
              selectedColor={'white'}
              buttonColor={'#5BC0EB'}
              borderColor={'#5BC0EB'}
              hasPadding = {true}
      
              options={[
                { label: "Calories", value: "calories"},
                { label: "Carbs", value: "carbs"},
                { label: 'Fats', value: 'fat'}
              ]}
            />
            <Button color = {"green"} onPress = {handleSubmit} title= "CALCULATE"/>
          </View>
        )}
      </Formik>
      <View style = {{justifyContent: 'center', marginTop: 10}}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              Growth
            </DataTable.Title>
            <DataTable.Title>
              Maintain
            </DataTable.Title>
            <DataTable.Title>
              Weight Loss
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell numeric style = {{justifyContent: "space-between"}}>{(total * 1.2).toFixed(0)}</DataTable.Cell>
            <DataTable.Cell numeric style = {{justifyContent: "space-between"}}>{total}</DataTable.Cell>
            <DataTable.Cell numeric style = {{justifyContent: "space-between"}}>{(total * 0.70).toFixed(0)}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  )
}

class CalcScreen extends React.Component {
  render() {  
    return (  
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        </View>
      </TouchableWithoutFeedback>
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