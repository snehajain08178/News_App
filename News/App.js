
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Navigator from './src/components/navigation';

//features bookmark

class App extends Component{

  render(){
    return (
       <Navigator />
     );
  }
};


export default App;
