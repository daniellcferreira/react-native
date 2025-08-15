import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './styles';
import Logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton';

export default function CardView() {

  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={Logo}/>
      </View>
    )
  };

  const renderCarDetails = () => {
    return (
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.carBrand}>Lamborghini</Text>
        <Text style={styles.carName}>MODEL</Text>
      </View>
      
    )
  };

  const renderCarImage = () => {
    return (
      <Image 
        style={styles.image}
        source={{uri: `${CAR_ASSETS_BASE_URL}2.png`}}
      />
    )
  }

  const renderPriceControls = () => {
    return (
      <View style={styles.priceContainer}>
        <Button title='<' color={'#01A6B3'} onPress={() => {}}/>
        <Text style={styles.priceText}>VALOR</Text>
        <Button title='>'color={'#01A6B3'} onPress={() => {}}/>
      </View>
    )
  }

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}