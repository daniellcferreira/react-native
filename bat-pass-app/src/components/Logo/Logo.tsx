import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function Logo() {
  return (
    <>
      <Text style={styles.title}>
        Bat Pass App
      </Text>

      <Image source={batLogo} 
        style={{
          resizeMode: 'contain',
          height: 180
        }}/>
    </>
  );
}