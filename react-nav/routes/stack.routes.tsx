import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from '../src/screens/HomeScreen';
import GalleryScreen from '../src/screens/GalleryScreen';

const { Navigator, Screen } = createStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name='home' component={HomeScreen} options={{title: 'Main Menu', headerTintColor: 'blue'}}/>
      <Screen name='gallery' component={GalleryScreen}/>
    </Navigator>
  )
}