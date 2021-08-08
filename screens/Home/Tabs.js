import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Tabs = () => {

  const [tab, setTab] = useState(1)

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => setTab(1)}>
            <Text
              numberOfLines={1}
              style={
                (tab === 1) ? styles.textSelected : styles.textNotSelected}>
              Best Seller
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => setTab(2)}>
            <Text
              numberOfLines={1}
              style={
                (tab === 2) ? styles.textSelected : styles.textNotSelected}>
              The Latest
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => setTab(3)}>
            <Text
              numberOfLines={1}
              style={
                (tab === 3) ? styles.textSelected : styles.textNotSelected
              }>
              Coming Soon
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textContainer: {
    flex: 1,
  },
  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    minWidth: 140,
    fontSize: 20,
  },
  textNotSelected: {
    color: 'rgba(255, 255, 255, 0.15)',
    fontWeight: 'bold',
    minWidth: 140,
    fontSize: 16,
  }
})

export default Tabs