import React, { useState, useEffect } from 'react'
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native'
import Card from './Card'
import Search from './Search'

/* export default function FetchApi({ navigation, search }) {
  const [coins, setCoins] = useState(null)

  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${search}&order=market_cap_desc&per_page=30&page=1&sparkline=false`
  )
    .then((response) => response.json())
    .then((result) => {
      setCoins(result)
    })

  return coins ? (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
            <Card props={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : (
    <View>
      <Text>no match</Text>
    </View>
  )

} */

export default function FetchApi({ navigation }) {
  const [search, setSearch] = useState('')
  const updateSearch = (val) => {
    setSearch(val)
  }
  function click() {
    console.log('click to search')
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
      .catch((error) => {
        console.log('not found fetch:', error)
      })
  }
  if (search === '') {
    getData()
  }

  function getData() {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
      .catch((error) => {
        console.log('not found fetch:', error)
      })
  }

  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${search}&order=market_cap_desc&per_page=30&page=1&sparkline=false`

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
      .catch((error) => {
        console.log('not found fetch:', error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Search updateSearch={updateSearch} click={click} />
      {data.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', item)}
            >
              <Card props={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seashell',

    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30
  }
})
