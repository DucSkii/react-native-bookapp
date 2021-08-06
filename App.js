import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import BookDetail from './screens/BookDetail'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
    background: '#1d202b',
  },
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={({ route }) => {
          return ({
            headerShown: route.name === 'Home' ? false : true
          })
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='BookDetail' component={BookDetail}
          options={{
            title: 'Detail Book',
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
