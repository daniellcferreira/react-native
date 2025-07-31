import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from "./assets/pictures/symbol-on.png"
import symbolOff from "./assets/pictures/symbol-off.png"

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol() {
    setIsActive((oldValue) => {
      return !oldValue;
    });
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={() => {handleSymbol()}}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
