import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Topic123 from './src/screens/Topic123';
import Topic4 from './src/screens/Topic4';
import Topic5 from './src/screens/Topic5';
import {SafeArea} from './src/components/utility/safe-area.component';
import Topic6 from './src/screens/Topic6';
import TopicScrollView from './src/screens/TopicScrollView';

const App = () => {
  return (
    <SafeArea>
      {/* <Topic123 /> */}
      {/* <Topic4 /> */}
      {/* <Topic5 /> */}
      {/* <Topic6 /> */}
      <TopicScrollView />
    </SafeArea>
  );
};

export default App;
