import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

type UserScreenProps = {
  route: RouteProp<RootStackParamList, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  const { userName } = route.params;

  return(
    <View>
      <Text>Bem vindo {userName}!!!</Text>
    </View>
  ) 
}