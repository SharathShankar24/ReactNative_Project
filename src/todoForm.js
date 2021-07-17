import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addTask } from './actions/task';

const TodoForm = ({ navigation }) => {

  const [task, setTask] = useState('')

  const dispatch = useDispatch();

  const submitTask = (task) => dispatch(addTask(task))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/tasks.png')}
      />
      <Text style={styles.title}>To-Do App</Text>
      <TextInput
        value={task}
        placeholder='Enter Task'
        style={styles.taskInput}
        onChangeText={(task) => setTask(task)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitTask(task)
          setTask('')
        }}>
        <Text style={{ fontSize: 22, color: 'navy' }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('Tasks')}>
        <Text style={{ fontSize: 22, color: 'navy' }}>Tasks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navajowhite',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
    marginTop: 16,
    color: 'darkorange'
  },
  taskInput: {
    fontSize: 24,
    marginBottom: 30,
    borderWidth: 4,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 10,
  }
});

export default TodoForm;
