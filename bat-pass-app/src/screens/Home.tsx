import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text} from "react-native";
import styles from "../screens/Styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

