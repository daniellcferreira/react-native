import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../src/screens/HomeScreen';
import GalleryScreen from '../src/screens/GalleryScreen';
import { MaterialCommunityIcons} from '@expo/vector-icons'

const { Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen name='home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons 
              name="home" 
              color='red' 
              size={size} />
          )
        }}        
      />
      <Screen name='gallery' 
        component={GalleryScreen} 
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons 
              name="view-gallery" 
              color='red' 
              size={size} />
          )
        }}  
      />
    </Navigator>
  );
}