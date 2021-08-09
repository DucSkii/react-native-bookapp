import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import books from '../../books'
import BookBlock from './BookBlock'

const Tabs = ({ navigation }) => {

  const bestSeller = [books[1], books[2], books[0], books[1], books[2]]
  const theLatest = [books[2], books[1], books[0], books[1], books[2]]
  const comingSoon = [books[0], , books[2], books[1], books[0], books[2]]

  const [tab, setTab] = useState(1)

  const renderBooks = () => {
    if (tab === 1) {
      return bestSeller.map((book, index) => {
        if (index === bestSeller.length - 1) {
          return (
            <View key={index} style={{ marginBottom: 30 }}>
              <BookBlock book={book} navigation={navigation} />
            </View>
          )
        }
        return (
          <View key={index} style={{ marginBottom: 15 }}>
            <BookBlock book={book} navigation={navigation} />
          </View>
        )
      })
    } else if (tab === 2) {
      return theLatest.map((book, index) => {
        if (index === bestSeller.length - 1) {
          return (
            <View key={index} style={{ marginBottom: 30 }}>
              <BookBlock book={book} navigation={navigation} />
            </View>
          )
        }
        return (
          <View key={index} style={{ marginBottom: 15 }}>
            <BookBlock book={book} navigation={navigation} />
          </View>
        )
      })
    } else {
      return comingSoon.map((book, index) => {
        if (index === bestSeller.length - 1) {
          return (
            <View key={index} style={{ marginBottom: 30 }}>
              <BookBlock book={book} navigation={navigation} />
            </View>
          )
        }
        return (
          <View key={index} style={{ marginBottom: 15 }}>
            <BookBlock book={book} navigation={navigation} />
          </View>
        )
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => setTab(1)}>
            <Text
              numberOfLines={1}
              style={
                (tab === 1) ? styles.textSelected : styles.textNotSelected
              }>
              Best Seller
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => setTab(2)}>
            <Text
              numberOfLines={1}
              style={
                (tab === 2) ? styles.textSelected : styles.textNotSelected
              }>
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
      <View style={styles.books}>
        <ScrollView nestedScrollEnabled={true}>
          {renderBooks()}
        </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  textContainer: {
    flex: 1,
  },
  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    minWidth: 140,
    fontSize: 18,
  },
  textNotSelected: {
    color: 'rgba(255, 255, 255, 0.15)',
    fontWeight: 'bold',
    minWidth: 140,
    fontSize: 16,
  },
  books: {
    height: 250,
  }
})

export default Tabs