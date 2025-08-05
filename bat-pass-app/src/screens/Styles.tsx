import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#ffffff",
    borderWidth: 2,
    alignSelf: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#4D4D4D"
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  }
});

export default styles;