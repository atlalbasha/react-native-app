import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import FetchApi from './FetchApi'

export default function Search({ updateSearch, click }) {
  return (
    <View style={styles.search}>
      <FontAwesome5
        testID="fontIcon"
        name="bitcoin"
        size={36}
        color="darkorange"
      />
      <TextInput
        testID="search"
        clearButtonMode="while-editing"
        style={styles.input}
        placeholder="Search..."
        autoCapitalize="none"
        onChangeText={(value) => updateSearch(value)}
      />

      <TouchableOpacity testID="btn" onPress={click}>
        <FontAwesome5 name="search" size={30} color="darkorange" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    height: 40,
    borderColor: 'darkorange',
    margin: 8,
    padding: 8
  },

  search: {
    backgroundColor: 'seashell',

    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  }
})
