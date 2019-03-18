import React, { Component } from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import {
    addwordScreen,
    apploadingScreen,
    cardviewScreen,
    welcomeScreen,
    wordlistScreen
} from '../screens';

const mainNavigator = createStackNavigator(
    {
        addwords:addwordScreen,
        cardview:cardviewScreen,
        wordlist:wordlistScreen,
        welcome:welcomeScreen
        
    },
    {
        cardStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerMode: 'none',
        initialRouteName: 'welcome',
      },
      
)

export default createSwitchNavigator(
    {
      apploading: apploadingScreen,
      welcome: mainNavigator
    },
    {
      initialRouteName: 'apploading',
    },

)