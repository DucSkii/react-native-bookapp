import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Notifications = () => {

  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Text style={styles.text}>No new notifications</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  notification: {
    height: '15%',
    borderWidth: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default Notifications