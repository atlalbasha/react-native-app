import React, { createContext, useState } from 'react'

export const CoinsContext = createContext()

export const CoinsProvider = (props) => {
  const [coins, setCoins] = useState([])
  return (
    <CoinsContext.Provider value={[coins, setCoins]}>
      {props.children}
    </CoinsContext.Provider>
  )
}
