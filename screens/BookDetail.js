import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import books from '../books'

const BookDetail = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={books[0].image}
        blurRadius={100}
      >
        <View style={{ height: '65%' }}>
          <Text style={{ color: 'white' }}>asdsad</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    height: '65%',
    width: '100%',
  },
})

export default BookDetail