import React, { useState } from 'react';  
import uuid from 'uuid/v4';
import { YellowBox } from 'react-native';
import {Header} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {Button, Card, Title} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import { ScrollView } from 'react-native-gesture-handler';
import Modal, { ModalContent, BottomModal } from 'react-native-modals';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';  

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // Error caused by Flatlist inside scrollview. Unpatched error message  
])

//Macros Object -- 
//List of all the macros being tracked
const Macros = []

//Class for each macro card with a constructor with a unique generated UUID for the key
class macroCards{  
  numMacros = 0

  constructor(title,unit){
      this.title = title;
      this.unit = unit;
      this.total = 0;
      this.key = uuid()
  }

  addTotal(val){
    this.total = this.total + val
    return this.total
  }
}

const calories = new macroCards('Calories', '');
const protein = new macroCards("Protein","g");
const carbs = new macroCards("Carbs","g");

Macros.push(calories)
Macros.push(protein)
Macros.push(carbs)

calories.addTotal(1800)
protein.addTotal(30)
carbs.addTotal(100)

function currMacroTracker(){
  const [currMacro, setCurrMacro] = useState("calories");
}

//Forms / Modals--
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

function popUpForm(){
  <Modal
    visible= {this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <ModalContent>
    </ModalContent>
  </Modal>
}

//Rendering Macros--
class HomeScreen extends React.Component { 

  state = {
    currentMacro: ''
  }

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {  
    return ( 
      <View style = {{flex:1}}>
        <Header 
          centerComponent={{ text: 'MY MACROS', style: { color: '#fff', letterSpacing: 2} }}
          containerStyle={{
            backgroundColor: '#5BC0EB',
          }}
        />
        
        <Progress.Bar progress={0.7} width={null} height={10} borderRadius = {0} color = {'lightgreen'}/>
        
        <ScrollView>
          <FlatList 
            data = {Macros}
            renderItem = {({ item }) => (
              <TouchableOpacity onPress = {this.toggleModal}>
                  <Card style = {{justifyContent: 'center', margin: 1, backgroundColor: '#ffff', borderRadius: 25}}>
                    <Card.Content>
                      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
                          <Title style = {{paddingTop: 20, fontSize: 35, fontWeight: 'bold',color: 'black', letterSpacing: 2}}>{item.total} {item.unit}</Title>
                          <Text style= {{fontSize: 30, color: 'black', letterSpacing: 2, fontWeight: '100'}}>{item.title}</Text>
                        </View>
                        <MainProgress/>
                      </View> 
                    </Card.Content>
                    <Card.Actions>
                    </Card.Actions>
                  </Card>
              </TouchableOpacity>
            )}
            keyExtractor = {item => item.key}
          />
        </ScrollView> 

        <BottomModal
          visible={this.state.isModalVisible}
          onTouchOutside={() => {
            this.setState({ isModalVisible: false });
          }}
        >
          <ModalContent>
            <Button> Add </Button>
            <Button> Subtract </Button>
          </ModalContent>
        </BottomModal>

       <Button color = {'#5BC0EB'} onPress={popUpForm}>Add New Macro</Button>
      </View>
    );  
  }  
}  

const styles = StyleSheet.create({
  progressBar:{
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default HomeScreen;