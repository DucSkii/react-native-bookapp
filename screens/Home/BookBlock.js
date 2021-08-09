import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import books from '../../books'

const BookBlock = () => {

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={books[0].image} />
      <View style={styles.info}>
        <View>
          <Text numberOfLines={1} style={styles.infoTitle}>{books[0].title}</Text>
          <Text numberOfLines={1} style={styles.infoAuthor}>{books[0].author}</Text>
          <Text style={styles.infoPages}>{books[0].pages} pages</Text>
          <View style={styles.genre}>

          </View>
        </View>
        <View style={{
          width: 25,
          height: 25,
          backgroundColor: 'white',
          borderRadius: 5,
          opacity: 0.15,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ width: '60%', height: '60%', borderWidth: 2, borderColor: 'white', borderRadius: 5 }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
  },
  image: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 2.5,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    maxWidth: 190,
  },
  infoAuthor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.5,
    marginTop: 5,
    maxWidth: 190,
  },
  infoPages: {
    fontSize: 13,
    color: 'white',
    opacity: 0.5,
    marginTop: 20,
  },
})

export default BookBlock