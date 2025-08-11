import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}: any) {

  function navToGallery(){
    navigation.navigate('gallery');
  }

  return (
    <View style={{ flex:1, backgroundColor: 'red'}}>
      <Text>Home works!!!</Text>
      <Button title="Go to Gallery" onPress={navToGallery} />
      <StatusBar style="auto" />
    </View>
  )
}