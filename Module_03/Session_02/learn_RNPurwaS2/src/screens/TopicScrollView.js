import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Axios from 'axios';
import {padding} from '../styles';
import {colors} from '../styles/colors';

const TodoItem = ({todoActivity}) => {
  return (
    <View style={styles.todoContainer}>
      <Text>{todoActivity}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={{backgroundColor: colors.brand.secondary, ...styles.todoBtn}}
          activeOpacity={0.8}
          underlayColor="white"
          onPress={() => {}}>
          <Text>Done</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.todoBtn, backgroundColor: colors.brand.secondary}}>
          <Text style={{color: colors.bg.primary}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TopicScrollView = () => {
  const [data, setData] = useState([]);
  const todoData = [
    {
      todoActivity: 'Coding',
    },
    {
      todoActivity: 'Makan',
    },
    {
      todoActivity: 'Minum',
    },
    {
      todoActivity: 'Rebahan',
    },
    {
      todoActivity: 'Belajar',
    },
  ];

  useEffect(() => {
    Axios.get('https://covid-19-tracking.p.rapidapi.com/v1', {
      headers: {
        'x-rapidapi-key': 'f222f0dddfmshf4f51fcc59ae458p15d7c3jsnb0471e9bfa44',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
      },
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const renderTools = () => {
    return todoData.map(val => {
      return (
        <TodoItem key={val.todoActivity} todoActivity={val.todoActivity} />
      );
    });
  };

  return (
    <ScrollView style={{backgroundColor: 'lightblue'}}>
      {renderTools()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.ui.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
  },
  todoBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});

export default TopicScrollView;
