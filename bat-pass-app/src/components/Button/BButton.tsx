import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './BButtonStyles';
import { BTextInput } from '../TextInput/BTextInput';

export function BButton() {
  const [pass, setPass] = React.useState('');

  function handleGenerateButton() {
    setPass('newGeneratedPass');
  }

  return (
    <>
      <BTextInput pass={pass}/>

      <Pressable onPress={handleGenerateButton}
        style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable onPress={() => {console.log('Pressed')}}
        style={styles.button}>
        <Text style={styles.text}>COPY</Text>
      </Pressable>
    </>
  );
}