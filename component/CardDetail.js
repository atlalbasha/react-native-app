import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

export default function CardDetail({ props }) {
  const image =
    'https://ciphertrace.com/wp-content/uploads/2018/07/Q2-Crypto-AML-Report-Summary.jpg'
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: props.image
          }}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Coin: {props.name}</Text>
          <Text style={styles.text}>
            Current Price: {props.current_price} $
          </Text>
          <Text style={styles.text}>Last Updated: {props.last_updated}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: { paddingLeft: 16 },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'seashell'
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#0007',
    padding: 10
  },
  imageBackground: {
    flex: 1,
    margin: 8,
    borderRadius: 50
  }
})
