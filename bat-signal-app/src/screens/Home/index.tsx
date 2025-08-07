import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import batLogo from "../../../assets/bat-logo.png";
import { styles } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heigthtPercentageToDP as hp } from "react-native-responsive-screen";
import { RootStackParamList } from "../../navegation/types";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={batLogo} style={{height: wp(45), width: hp(45)}}/>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Form')}>
          <Text style={styles.btn}>Ativar Bat Sinal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}