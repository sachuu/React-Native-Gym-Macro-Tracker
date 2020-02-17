import React from 'react';  
import * as Progress from 'react-native-progress';
import {Header, ListItem} from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'
import {StyleSheet, Text, View, Modal, FlatList} from 'react-native';  
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Macros = []

class macroCards{  
  numMacros = 0

  constructor(title,unit,total,key){
      this.title = title;
      this.unit = unit;
      this.total = 0;
  }
}

const calories = new macroCards('Calories', 'g');
const protein = new macroCards("Protein","g");
const carbs = new macroCards("Carbs","g")

Macros.push(calories)
Macros.push(protein)
Macros.push(carbs)


function MainProgress(){
  return(
    <View style = {styles.progressBar}>
      <ProgressCircle style = {styles.progressBar}
        percent={30}
        radius={100}
        borderWidth={5}
        color="#43e843"
        shadowColor="#999"
        bgColor="#fff"
      >

      <Text style = {{fontWeight: 'normal', fontSize: 20, alignItems: 'center', justifyContent: 'center'}}>{'Goal'}</Text>
      <Text style = {{fontWeight: 'bold', fontSize: 35, alignItems: 'center', justifyContent: 'center'}}>{'30%'}</Text>
      </ProgressCircle>
    </View>
  )
}

function popUpForm(){
  <Modal
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <ModalContent>
    </ModalContent>
  </Modal>
}

class HomeScreen extends React.Component { 
  render() {  
    return ( 
      <View style = {{flex:1}}>
        <Header
          centerComponent={{ text: 'MY MACROS', style: { color: '#fff' } }}
        />
        <MainProgress/>
        <Button  onPress={popUpForm}>Add New Macro</Button>
        
      </View>
  );  
  }  
}  


const styles = StyleSheet.create({
  card: {
    justifyContent: 'center', 
    borderRadius: 30,
    margin: 5
  },
  progressBar:{
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default HomeScreen;