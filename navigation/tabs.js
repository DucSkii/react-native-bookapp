import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Settings, Search, Notifications } from '../tabs'
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

const tabOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#1d202b',
  },
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? 'white' : '#343641'

          const icons = {
            Home: 'home',
            Search: 'search',
            Notifications: 'bell',
            Settings: 'cog',
          }

          switch (route.name) {
            case 'Home':
              return (
                <Icon
                  name={icons[route.name]}
                  size={25}
                  color={tintColor}
                />
              )
            case 'Search':
              return (
                <Icon
                  name={icons[route.name]}
                  size={25}
                  color={tintColor}
                />
              )
            case 'Notifications':
              return (
                <Icon
                  name={icons[route.name]}
                  size={25}
                  color={tintColor}
                />
              )
            case 'Settings':
              return (
                <Icon
                  name={icons[route.name]}
                  size={25}
                  color={tintColor}
                />
              )
          }
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Search'
        component={Search}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
      />
    </Tab.Navigator>
  )
}

export default Tabs