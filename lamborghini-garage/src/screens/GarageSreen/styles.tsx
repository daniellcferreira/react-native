import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cameraBox: {
    position: 'relative',
    width: 350,
    height: '90%',
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  tringleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#fff',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
  },
  topRight: {
    top: 0,
    right: 0,
    transform: [{ rotate: '90deg' }],
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-90deg' }],
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: '180deg' }],
  },
})