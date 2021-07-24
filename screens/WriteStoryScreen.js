import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.setState={
      title:'',
      author:'',
      story:'',
    }
  }
  submitStory=(title,author,story)=>{
        var submit
      db.collection("content").add({
        'story_title':title,
        'storys_author':author,
        'write_your_story':story,
      })
  }
    render(){
     return (
         <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Title of the story"}
              maxLength ={15}
              onChangeText={(text)=>{
                this.setState({
                  titleOfTheStory: text
                })
              }}
              value ={this.state.titleOfTheStory}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Author's Name"}
              maxLength ={10}
              onChangeText={(text)=>{
                this.setState({
                  authorsName: text
                })
              }}
              value ={this.state.authorsName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Write your story"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  writeStory: text
                })
              }}
                value ={this.state.writeStory}
            />
            <TouchableOpacity style={styles.button}
            onPress={this.submitStory}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Header
         leftComponent={{ icon: 'bars', color: '#fff' }}
         centerComponent={{ text: 'STORY HUB', style: { color: '000000', fontSize:20,fontWeight:"bold" } }}
         backgroundColor={'#ffc0cb'}
         
       />
         </View>
         
     )
    }
}