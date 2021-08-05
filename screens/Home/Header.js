import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Good Morning</Text>
        <Text style={styles.textBold}>Ducviet Dao</Text>
      </View>
      <View style={styles.pointsContainer}>
        <View style={styles.circle} />
        <View style={{ width: 10 }} />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>240</Text>
        <View style={{ width: 6 }} />
        <Text style={{ marginTop: 3, color: 'white' }}>points</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  textBold: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 5,
    flex: 1,
    maxWidth: 190,
  },
  pointsContainer: {
    backgroundColor: '#f8794b',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    paddingLeft: 4,
    paddingRight: 15,
    borderRadius: 30,
    marginTop: 18,
  },
  circle: {
    backgroundColor: '#ce552a',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
})

export default Header