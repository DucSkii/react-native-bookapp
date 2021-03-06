import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const BookDisplay = ({ id, image, time, navigation }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('BookDetail', { id })}
    >
      <Image style={styles.bookContainer}
        source={image}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
        <View style={{ width: 13, height: 13, borderColor: '#696c74', borderWidth: 1, borderRadius: 100 }} />
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  bookContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 210,
    borderRadius: 12,
  },
  time: {
    color: '#696c74',
    paddingLeft: 6,
    fontSize: 12,
  },
})

export default BookDisplay