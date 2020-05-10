import uuid from 'uuid/v4';
import React, { useState } from 'react';  
import {Header} from 'react-native-elements';
import { YellowBox, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import { Calculator, CalculatorInput} from 'react-native-calculator'
import {Button, Card, Title} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import { ScrollView } from 'react-native-gesture-handler';
import {BottomModal, ModalContent} from 'react-native-modals';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';  

// Error caused by Flatlist inside scrollview. Unpatched error message  
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', 
])

//Main progress bar
function MainProgress(){
    return(
      <View style = {styles.progressBar}>
        <ProgressCircle style = {styles.progressBar}
          percent={30}
          radius={30}
          borderWidth={3}
          color="lightgreen"
          shadowColor="#999"
          bgColor="#fff"
        >
        </ProgressCircle>
      </View>
    )
  }

  function newMacroForm(){
  
  }

  function acceptSub(){

  }

export default function MacrosList(){

    const [currMacro, setCurrMacro] = useState(0);

    const [macros, setMacros] = useState([
        {macroName: 'Calories', value: 0, key: '1'},
        {macroName: 'Protein', value: 0, key: '2'},
        {macroName: 'Carbs', value: 0, key: '3'},
        {macroName: 'Fats', value: 0, key: '4'} 
    ]);

    const acceptAdd = (value) => {
      //setMacros(macros[0].value + value);
      console.log(value)
    };

    //Modal for Add
    const [addformModal, setAddFormModal] = useState({addFormIsVisible: false});

    //Modal for Add
    const [subformModal, setSubFormModal] = useState({subFormIsVisible: false});
    
    //Modal state for bottom modal
    const [modalVisible, setModalVisible] = useState({isVisible: false});

    toggleModal = () => {
      setModalVisible({ isVisible: true });
    };

    addDismissBoth = () => {
      setModalVisible({isVisible: false});
      setAddFormModal({addFormIsVisible: false});
    }

    subDismissBoth = () => {
      setModalVisible({isVisible: false});
      setSubFormModal({subFormIsVisible: false});
    }

    return(
        <View style = {{flex:1}}>

            <Header 
            centerComponent={{ text: 'MY MACROS', style: { color: '#fff', letterSpacing: 2} }}
            containerStyle={{
                backgroundColor: '#5BC0EB',
            }}/>

            <Progress.Bar progress={0.7} width={null} height={10} borderRadius = {0} color = {'lightgreen'}/>
             
            <ScrollView>
                <FlatList 
                  data = {macros}
                  renderItem = {({ item }) => (
                      <TouchableOpacity onPress  = {toggleModal}>
                        <Card style = {{justifyContent: 'center', margin: 1, backgroundColor: '#ffff', borderRadius: 25}}>
                          <Card.Content>
                              <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
                                  <Title style = {{paddingTop: 20, fontSize: 35, fontWeight: 'bold',color: 'black', letterSpacing: 2}}>{item.value}</Title>
                                  <Text style= {{fontSize: 30, color: 'black', letterSpacing: 2, fontWeight: '100'}}>{item.macroName}</Text>
                              </View>
                              <ProgressCircle style = {styles.progressBar}
                                percent={30}
                                radius={30}
                                borderWidth={3}
                                color="lightgreen"
                                shadowColor="#999"
                                bgColor="#fff"
                              >
                              </ProgressCircle>
                              </View> 
                          </Card.Content>
                        </Card>
                      </TouchableOpacity>
                  )}
                  keyExtractor = {item => item.key}
                />
            </ScrollView> 

            <BottomModal
              visible={modalVisible.isVisible}
              onTouchOutside={() => {
                setModalVisible({ isVisible: false });
              }}>
              <ModalContent>
                <Button onPress = {()=> {setAddFormModal({addFormIsVisible: true})}}> Add </Button>
                <Button onPress = {()=> {setSubFormModal({subFormIsVisible: true})}}> Subtract </Button>
                <Button color = {'#fc4747'}> Delete Macro </Button> 
              </ModalContent>
            </BottomModal>

            {/* Add Modal */}

            <Modal
              animationType="slide"
              transparent={false}
              visible={addformModal.addFormIsVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>

              <Header 
                centerComponent={{ text: 'Press Enter To Add (Green)', style: { color: '#fff', letterSpacing: 1} }}
                containerStyle={{
                    backgroundColor: '#5BC0EB',
              }}/>

              <View style={{ flex: 1}}>
                <Calculator style={{ flex: 1 }} hasAcceptButton = {true} onAccept = {acceptAdd} acceptButtonBackgroundColor = {'lightgreen'}/>
              </View>

              <Button mode = 'contained' color = {'#FF9285'}  labelStyle={{ color: "white", fontSize: 12}} onPress = {addDismissBoth}> Dismiss</Button>

            </Modal>

            {/* Subtract Modal */}

            <Modal
              animationType="slide"
              transparent={false}
              visible={subformModal.subFormIsVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>

              <Header 
                centerComponent={{ text: 'Press Enter To Sub. (Green)', style: { color: '#fff', letterSpacing: 1} }}
                containerStyle={{
                    backgroundColor: '#5BC0EB',
              }}/>

              <View style={{ flex: 1}}>
                <Calculator style={{ flex: 1 }} hasAcceptButton = {true} onAccept = {acceptSub} acceptButtonBackgroundColor = {'#FAB35E'}/>
              </View>

              <Button mode = 'contained' color = {'#FF9285'}  labelStyle={{ color: "white", fontSize: 12}} onPress = {subDismissBoth}> Dismiss</Button>

            </Modal>
          
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button mode = 'contained' color = {'#FFE4A6'}  labelStyle={{ color: "black", fontSize: 12}} onPress={newMacroForm}>Set Macro Goals</Button>
              <Button mode = 'contained' color = {'#FFE4A6'}  labelStyle={{ color: "black", fontSize: 12}} onPress={newMacroForm}>Refresh Macros</Button>
            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    progressBar:{
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });