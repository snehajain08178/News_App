
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsPage from './newsPage';
import HomePage from './homePage';

const Stack = createStackNavigator();

class Navigator extends React.Component {
    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="HomePage" 
                              component={HomePage} 
                              options={{header: () => null }}/>
                <Stack.Screen name="NewsPage" 
                              component={NewsPage} 
                              options={{header: () => null}}/>
              </Stack.Navigator>
            </NavigationContainer>
          );
    }
}

export default Navigator;