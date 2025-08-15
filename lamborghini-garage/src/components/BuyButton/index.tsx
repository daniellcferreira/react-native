import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign} from '@expo/vector-icons';

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name='shoppingcart' size={24} color='#fff' style={styles.icon}/>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )
}