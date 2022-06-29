import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  container: {
    width: 120,
    flexDirection: "row",
    backgroundColor: "#b1e3fa",
    borderRadius: 50,
    height:40
  },
  button: {
    backgroundColor: "#127cc0",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360,
    margin: 5,
  },
  qtyView: {
    width: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#127cc0",
    alignSelf: "center",
  },
});

export default styles;
