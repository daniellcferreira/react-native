import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  carBrand: {
    fontSize: 20,
    fontWeight: 400,
    color: '#fff',
    fontStyle: 'italic',
  },
  carName: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginTop: 10,
  },
  priceText: {
    fontSize: 20,
    color: '#fff',

  },
});