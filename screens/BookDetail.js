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
        <View style={{ height: '100%' }}>
          <View style={styles.detailContainer}>
            <Image style={{ height: '50%', width: '35%' }} source={books[0].image} />
            <View style={{ marginTop: 15 }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{books[0].title}</Text>
              <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', marginTop: 5, }}>{books[0].author}</Text>
            </View>
            <View style={styles.detailBox}>
              <View style={styles.detailBoxBackground}>
                <View style={[styles.boxSection, { borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }]}>

                </View>
                <View style={{ height: '40%', backgroundColor: 'white', opacity: 0.15, width: 1, }} />
                <View style={styles.boxSection}>

                </View>
                <View style={{ height: '40%', backgroundColor: 'white', opacity: 0.15, width: 1, }} />
                <View style={[styles.boxSection, { borderTopRightRadius: 15, borderBottomRightRadius: 15, }]}>

                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Text style={{ color: 'white' }}>asdsad</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    minHeight: '65%',
    maxHeight: '65%',
  },
  detailContainer: {
    marginTop: '25%',
    height: '80%',
    alignItems: 'center',
  },
  detailBox: {
    flex: 1,
    width: '100%',
    padding: 25,
  },
  detailBoxBackground: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    alignItems: 'center',
    borderRadius: 15,
  },
  boxSection: {
    flex: 1,
    height: '100%',
  },
})

export default BookDetail