import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text} from "react-native";
import styles from "../screens/Styles"
import { Logo } from "../components/Logo/Logo";
import { BTextInput } from "../components/TextInput/BTextInput";
import { BButton } from "../components/Button/BButton";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo></Logo>
      </View>

      <View style={styles.inputContainer}>
        <BButton/>
      </View>
      
      <StatusBar style="light" />
    </View>
  )
}

