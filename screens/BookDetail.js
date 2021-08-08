import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import books from '../books'

const BookDetail = ({ route }) => {

  const { id } = route.params

  const [book, setBook] = useState(null)

  useEffect(() => {
    setBook(...books.filter(book => book.id === id))
  }, [])

  if (!book) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%', height: 60, position: 'absolute', backgroundColor: 'rgba(00, 0, 0, 0.1)' }} />
      <ImageBackground
        style={styles.image}
        source={book.image}
        blurRadius={100}
      >
        <View style={{ height: '100%' }}>
          <View style={styles.detailContainer}>
            <Image style={{ height: '50%', width: '35%' }} source={book.image} />
            <View style={{ marginTop: 15 }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{book.title}</Text>
              <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', marginTop: 5, }}>{book.author}</Text>
            </View>
            <View style={styles.detailBox}>
              <View style={styles.detailBoxBackground}>
                <View style={[styles.boxSection, { borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }]}>
                  <Text style={styles.topText}>{book.rating}</Text>
                  <Text style={styles.bottomText}>Rating</Text>
                </View>
                <View style={{ height: '40%', backgroundColor: 'white', opacity: 0.15, width: 1, }} />
                <View style={styles.boxSection}>
                  <Text style={styles.topText}>{book.pages}</Text>
                  <Text style={styles.bottomText}>Numbers of Page</Text>
                </View>
                <View style={{ height: '40%', backgroundColor: 'white', opacity: 0.15, width: 1, }} />
                <View style={[styles.boxSection, { borderTopRightRadius: 15, borderBottomRightRadius: 15, }]}>
                  <Text style={styles.topText}>{book.language}</Text>
                  <Text style={styles.bottomText}>Language</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.description}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Description</Text>
        <ScrollView>
          <Text style={{ color: 'white', opacity: 0.5, fontSize: 18, letterSpacing: 0.3 }}>{book.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            width: '10%',
            marginRight: '5%',
            borderRadius: 10,
            backgroundColor: 'white',
            opacity: 0.12,
            padding: 8,
          }}>
          <View style={{ width: '100%', height: '100%', borderWidth: 2, borderColor: 'white', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '85%', borderRadius: 10, backgroundColor: '#f9784b', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Start Reading</Text>
        </TouchableOpacity>
      </View>
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
    zIndex: -1,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  topText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  bottomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    opacity: 0.5,
    padding: 5,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    padding: 25,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 60,
    maxHeight: 60,
    backgroundColor: 'transparent',
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
  },
})

export default BookDetail