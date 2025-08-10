import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 40
  },
  inline: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
