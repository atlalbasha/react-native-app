import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CoinsContext, CoinsProvider } from '../component/CoinsContext'
import Card from '../component/Card'
export default function List() {
  const [coins, setCoins] = useContext(CoinsContext)
  return (
    <View style={styles.container}>
      <FlatList data={coins} renderItem={({ item }) => <Card props={item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seashell',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30
  }
})
