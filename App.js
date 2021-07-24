import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


export default class App extends React.Component {
    render(){
      return(
          <AppContainer/>
      )
    }
  }
  const tabnavigator=createBottomTabNavigator({
    WriteStory:{screen:WriteStoryScreen},
   ReadStory:{screen:ReadStoryScreen}
  
  },
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
        const routeName=navigation.state.routeName
        if(routeName ==='WriteStory'){
          return(
            <Image 
            source={require('write.png')}
            style={{width:40,height:40}}
            />
          )
        }
        else if (routeName ==='ReadStory'){
          return(
            <Image 
            source={require('read.png')}
            style={{width:40,height:40}}
            />
          )
        }
      }
    })
  }
  )
  
  
  const AppContainer=createAppContainer(tabnavigator)
  