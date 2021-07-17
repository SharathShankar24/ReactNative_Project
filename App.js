import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoForm from './src/todoForm';
import TaskList from './src/todoList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="TodoForm"
        component={TodoForm}
        options={{
          title: 'Macrosoft',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'peru'
          }
        }}
      />
      <Stack.Screen
        name="Tasks"
        component={TaskList}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'peru'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>