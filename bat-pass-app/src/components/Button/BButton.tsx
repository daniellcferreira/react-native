import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BButtonStyles';
import { BTextInput } from '../TextInput/BTextInput';
import generatePass from '../../services/passwordService';

export function BButton() {
  const [pass, setPass] = React.useState('');

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BTextInput pass={pass}/>

      <Pressable onPress={handleGenerateButton}
        style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton}
        style={styles.button}>
        <Text style={styles.text}>COPY</Text>
      </Pressable>
    </>
  );
}