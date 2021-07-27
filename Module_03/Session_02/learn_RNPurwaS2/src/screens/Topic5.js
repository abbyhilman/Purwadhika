import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

const SampleComponent = () => {
  useEffect(() => {
    return () => {
      Alert.alert('COMPONENT UNMOUNT');
    };
  }, []);
  return (
    <View>
      <Text>Sample</Text>
    </View>
  );
};

const Topic5 = () => {
  const [todoAcount, setTodoAccount] = useState(0);
  const [todoInput, setTodoInput] = useState('hello');
  // const [stateAku, setStateAku] = useState({
  //   todoCount: 0,
  //   todoInput: 'hello',
  // });

  //componentDidMount
  // useEffect(() => {

  // }, [])

  //componentDidUpdate
  // useEffect(() => {
  //   console.log('TODO COUNT CHANGE');
  // }, [todoAcount]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component unmount');
    };
  }, []);

  return (
    <View>
      <Text>Topic 5</Text>
      <Text>TODO COUNT: {todoAcount}</Text>
      <TouchableOpacity
        onPress={() => {
          setTodoAccount(todoAcount + 1);
        }}>
        <Text>Change todoCount</Text>
      </TouchableOpacity>
      <Text>TODO INPUT: {todoInput}</Text>
      <TouchableOpacity
        onPress={() => {
          setTodoInput('abc');
          // setStateAku({
          //   ...stateAku,
          //   todoCount: stateAku.todoCount + 1,
          // });
        }}>
        <Text>Change todoInput</Text>
      </TouchableOpacity>
      {todoAcount === 0 ? <SampleComponent /> : null}
    </View>
  );
};

export default Topic5;
