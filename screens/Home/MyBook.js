import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import BookDisplay from './BookDisplay'
import books from '../../books'

const MyBook = ({ navigation }) => {

  const bookArray = [books[0], books[1], books[2], books[0], books[1], books[2]]

  const renderBooks = () => {
    return bookArray.map((book, index) => {
      if (index === bookArray.length - 1) {
        return (
          <View style={styles.lastBook} key={index}>
            <BookDisplay navigation={navigation} time={book.time} image={book.image} />
          </View>
        )
      }
      return (
        <View style={styles.book} key={index}>
          <BookDisplay navigation={navigation} time={book.time} image={book.image} />
        </View>
      )
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Book</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          style={styles.books}
          horizontal
        >
          {renderBooks()}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerText: {
    color: '#696c74',
    textDecorationLine: 'underline'
  },
  book: {
    marginRight: 18,
    paddingBottom: 10,
  },
  lastBook: {
    marginRight: 0,
    paddingBottom: 10,
  },
})

export default MyBook