import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import FetchApi from '../component/FetchApi'
import Search from '../component/Search'

export default function Home({ navigation }) {
  const [search, setSearch] = useState('')
  const updateSearch = (val) => {
    setSearch(val)
  }
  function click() {
    console.log('click to search')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Search updateSearch={updateSearch} click={click} /> */}
      <Text>{search}</Text>
      <FetchApi navigation={navigation} search={search} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
