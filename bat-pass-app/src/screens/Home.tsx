import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text} from "react-native";
import styles from "../screens/Styles"
import { Logo } from "../components/Logo/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Logo></Logo>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

