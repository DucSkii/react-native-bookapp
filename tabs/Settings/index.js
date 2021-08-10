import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Settings = () => {

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Settings Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Settings