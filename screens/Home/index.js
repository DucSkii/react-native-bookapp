import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Navigation from './Navigation'
import MyBook from './MyBook'
import Tabs from './Tabs'

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
      <MyBook navigation={navigation} />
      <Tabs />
      {/* 
      Header - Name, points
      Button 1, 2 ,3
      My book
      Best seller, latest, coming soon
      */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 0,
  },
})

export default Home