import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native'

export default function Card({ props }) {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.current_price} $</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: props.image
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'darkorange',
    margin: 3,
    padding: 10,
    borderRadius: 7
  },
  title: { paddingLeft: 16 },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'seashell',
    marginRight: 8
  },
  text: {
    color: 'white',
    fontSize: 22,

    fontWeight: 'bold'
  }
})
