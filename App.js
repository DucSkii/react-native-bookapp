import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import Tabs from './navigation/tabs'
import BookDetail from './screens/BookDetail'
import Home from './screens/Home'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
}

// const Stack = createStackNavigator()

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
    // <NavigationContainer theme={theme}>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false
    //     }}
    //     initialRouteName={'Home'}
    //   >
    //     <Stack.Screen name='Home' component={Tabs} />
    //     <Stack.Screen name='BookDetail' component={BookDetail} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d202b',
    color: 'red',
    height: '100%',
  },
})

export default App
