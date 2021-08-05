import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Tabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button1}>
        <Text style={styles.text}>Claim</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.button2}>
        <Text style={styles.text}>Get Point</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.button3}>
        <Text style={styles.text}>My Card</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2a2d37',
    borderRadius: 10,
  },
  button1: {
    backgroundColor: '#2a2d37',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button2: {
    backgroundColor: '#2a2d37',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  button3: {
    backgroundColor: '#2a2d37',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 13,
    paddingTop: 1,
    paddingBottom: 1,
  },
  divider: {
    width: 2,
    height: '40%',
    backgroundColor: '#3c3f49',
  },
})

export default Tabs