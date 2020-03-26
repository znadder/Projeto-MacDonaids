import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import homePage from '../pages/homePage';
import settingsPage from '../pages/settingsPage';
import leadersPage from '../pages/leadersPage';
import scanPage from '../pages/scanPage';
import mapPage from '../pages/mapPage';
import login from '../pages/login';

import AIcon from '../components/index';

const App = createBottomTabNavigator(
  {
    Map: {
      screen: mapPage,
      navigationOptions: {

      }
    },
    Home: {
      screen: homePage,
      navigationOptions: {

      }
    },
    Scan: {
      screen: login,
      navigationOptions: {

      }
    },
    Leaders: {
      screen: leadersPage,
      navigationOptions: {

      }
    },
    Settings: {
      screen: settingsPage,
      navigationOptions: {

      }
    }

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = "earth";

        if (routeName === "Home") {
          iconName = "home";
        }
        else if (routeName === "Scan") {
          iconName = "checkbox-unchecked";
        }
        else if (routeName === "Leaders") {
          iconName = "trophy";
        }
        else if (routeName === "Settings") {
          iconName = "cog";
        }

        return <View style={{ marginTop: 8 }}>
              <AIcon name={iconName} size={20} color={tintColor}/>
        </View>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#CE1B29',
      inactiveTintColor: "#c1c1c1",
      upperCaseLabel: true,
      style: {
        // height: 58,
        backgroundColor: 'f6f6f6',
        shadowColor: "#000",
        shadowOffset: {
          width: -80,
          height: -80,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.65,
        elevation: 1,
        borderTopWidth: 0.001,
        borderTopColor: "#D0D0D0",
      },
      tabStyle: {
      },
      labelStyle: {
        margin: 0,
        fontSize: 14,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'GentiumPlus-I',
      },
      indicatorStyle: {
        borderTopColor: "#CE1B29",
        top: -1,
        borderTopWidth: 30,
      },
    }
  }
);

export default createAppContainer(App);