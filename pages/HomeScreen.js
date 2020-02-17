import React from 'react';  
import * as Progress from 'react-native-progress';
import {Header, ListItem} from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Text, View, Modal, FlatList, ImageBackground} from 'react-native';  
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
          centerComponent={{ text: 'MY MACROS', style: { color: '#fff', letterSpacing: 2} }}
          containerStyle={{
            backgroundColor: '#5BC0EB',
          }}
        />
        <Progress.Bar progress={0.7} width={null} height={10} borderRadius = {0} color = {'lightgreen'}/>
        <ScrollView>
        {Macros.map((item) => {
            return(
              <View>
                <Card style = {{justifyContent: 'center', margin: 1, backgroundColor: '#ffff', borderRadius: 25}}>
                  <Card.Content>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Title style = {{paddingTop: 20, fontSize: 35, fontWeight: 'bold',color: 'black', letterSpacing: 2}}>{item.total}</Title>
                        <Text style= {{fontSize: 30, color: 'black', letterSpacing: 2, fontWeight: '100'}}>{item.title}</Text>
                      </View>
                      <MainProgress/>
                    </View> 
                  </Card.Content>
                  <Card.Actions>
                  </Card.Actions>
                </Card>
              </View>
            )
          })}
      </ScrollView> 
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