import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import books from '../../books'

const BookBlock = ({ book, navigation }) => {

  const renderGenre = () => {

    const color = {
      Drama: 'rgba(85,89,167, 0.3)',
      Romance: 'rgba(217,110,123, 0.3)',
      Adventure: 'rgba(102,187,127, 0.3)',
    }

    const textColor = {
      Drama: 'rgb(85,89,167)',
      Romance: 'rgb(217,110,123)',
      Adventure: 'rgb(102,187,127)',
    }

    return book.genre.map((genre, index) => {
      if (index === books[0].genre.length - 1) {
        return (
          <View key={index} style={[styles.genreBlock, { backgroundColor: color[genre] }]}>
            <Text style={[styles.genreText, { color: textColor[genre] }]}>{genre}</Text>
          </View>
        )
      }

      return (
        <View key={index} style={[styles.genreBlock, { backgroundColor: color[genre], marginRight: 5 }]}>
          <Text style={[styles.genreText, { color: textColor[genre] }]}>{genre}</Text>
        </View>
      )
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BookDetail', { id: book.id })}>
      <Image style={styles.image} source={book.image} />
      <View style={styles.info}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.infoTitle}>{book.title}</Text>
          <Text numberOfLines={1} style={styles.infoAuthor}>{book.author}</Text>
          <Text style={styles.infoPages}>{book.pages} pages</Text>
          <View style={styles.genre}>
            {renderGenre()}
          </View>
        </View>
        <View style={{
          width: 25,
          height: 25,
          backgroundColor: 'white',
          borderRadius: 5,
          opacity: 0.1,
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
    justifyContent: 'space-between',
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
  genre: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreBlock: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
  },
  genreText: {
    fontSize: 13,
  },
})

export default BookBlock