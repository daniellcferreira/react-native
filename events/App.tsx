import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { helloExample } from './src/actions';

export default function App() {
  async function handlePress(id: number) {
    console.log("pressionado...");
  }

  async function handleHelloWorld() {
    console.log("Hello World");
  }

  return (
    <View style={styles.container}>
      {/* <Text onPress={() => console.log("inline")}>Inline</Text>
      <Text onPress={handleHelloWorld}>Handler Function</Text>
      <Text onPress={() => handlePress(1)}>Handler Function With Parameters</Text>
      <Text onPress={helloExample}>Imported Function</Text> */}

      {/* <Text 
        style={{fontSize: 32}} 
        onPress={() => console.log("pressionado!")}
        onPressIn={() => console.log("press in acionado!")}
        onPressOut={() => console.log("press out acionado!")}
        onLongPress={() => console.log("long press acionado!")}
        onTextLayout={() => console.log("text layout acionado!")}
        >Componente principal</Text> */}

      <TextInput style={{fontSize: 32}} 
        placeholder='exemplo'
        onChange={() => console.log("onChange executado!")}
        onChangeText={() => console.log("onChangeText acionado!")}
        onFocus={() => console.log("usuario focou nesse componente")}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
