import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import CardDetail from '../component/CardDetail'
import { CoinsContext, CoinsProvider } from '../component/CoinsContext'

export default function Detail({ route, navigation }) {
  const [coins, setCoins] = useContext(CoinsContext)

  const addCoins = () => {
    const found = coins.find((element) => element.id === route.params.id)

    if (!found) {
      setCoins((prevCoins) => [...prevCoins, route.params])
    }
  }

  return (
    <View style={styles.container}>
      <CardDetail props={route.params} />
      <View style={styles.btn}>
        <Button title="Add to List" onPress={addCoins} />
      </View>
      <View style={styles.btn}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 80,

    flex: 1
  },
  btn: { margin: 4 }
})
