import React from 'react';
import {StatusBar} from 'react-native';
import Product from './pages/Product';
import Cart from './pages/Cart';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator style={{paddingTop: StatusBar.currentHeight + 50}}>
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
