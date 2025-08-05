import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BTextInputStyles';

interface BTextInputProps {
  pass: string
}

export function BTextInput(props: BTextInputProps) {
  return (
      <TextInput style={styles.inputer} 
        placeholder='pass'
        value={props.pass}/>

      
  );
}