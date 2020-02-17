import React from 'react';  
import {StyleSheet, Text, View, Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

//Screens
import ProfileScreen from "./pages/ProfileScreen";
import HomeScreen from "./pages/HomeScreen";
import CalcScreen from "./pages/CalcScreen";

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

const TabNavigator = createMaterialBottomTabNavigator(
    {  
      Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-stats'}/>  
                    </View>),  
            }  
        },  

        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-add'}/>  
                    </View>),  
                activeColor: '#f0edf6',  
                inactiveColor: '#4d4dff',  
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },  

        Calc: { screen: CalcScreen,  
            navigationOptions:{  
                tabBarLabel:'Calculate',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-calculator'}/>  
                    </View>),  
                activeColor: '#f0edf6',  
                inactiveColor: '#4d4dff',  
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },  
    },  
    //config
    {  
      shifting: true,
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#4d4dff',  
      barStyle: { backgroundColor: '#ffffff' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  