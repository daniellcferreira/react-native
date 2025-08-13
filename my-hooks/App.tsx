import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(10.9);
  const initialPrice = 10.9;

  const increment = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setPrice(initialPrice * newQuantity);
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      setPrice(initialPrice * newQuantity);
      return newQuantity;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title='-' onPress={decrement}/>   
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title='+' onPress={increment}/>
      </View>
      <Text style={styles.textLabel}>Price: ${price.toFixed(2)}</Text>
      <StatusBar style="auto" />
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
  textLabel: {
    fontSize: 22,
    color: 'blue',
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 15,
  }
});
