import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/HomeScreen';
import GalleryScreen from '../src/screens/GalleryScreen';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="gallery" component={GalleryScreen} /> 
    </Navigator>
  );
}