import { View, Text } from "react-native";
import { styles } from "./styles";
import CardView from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.tringleCorner}></View>
        <View style={[styles.tringleCorner, styles.topRight]}></View>
        <View style={[styles.tringleCorner, styles.bottomLeft]}></View>
        <View style={[styles.tringleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  )
}