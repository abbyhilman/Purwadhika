import * as React from 'react';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Message from './src/pages/Message';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function App() {
  const selector = useSelector(state => {
    return {
      notification: state.notification,
    };
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarBadge: selector.notification.home
              ? selector.notification.home
              : null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarBadge: selector.notification.profile
              ? selector.notification.profile
              : null,
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarBadge: selector.notification.message
              ? selector.notification.message
              : null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
