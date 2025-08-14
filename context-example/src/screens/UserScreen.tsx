import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
  route: RouteProp<RootStackParamList, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
  const { userName } = route.params;
  const UserContextValue = useContext(UserContext);
  const nomeDinamico = UserContextValue?.loginName || "Usuário não encontrado";
  const nomeEstatico = UserContextValue?.nome || "Nome não definido";

  return(
    <View>
      <Text style={{fontSize: 32}}>Nome da Rota: {userName}</Text>
      <Text style={{fontSize: 32}}>Nome Estatico: {nomeEstatico}</Text>
      <Text style={{fontSize: 32}}>Nome Dinamico: {nomeDinamico}</Text>
    </View>
  ) 
}