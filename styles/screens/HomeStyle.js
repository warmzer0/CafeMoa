import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  homeText: {
    marginTop: "20%",
    marginBottom: "2%",
  },

  btnInfoReservation: {
    width: Dimensions.get("window").width,
    height: "30%",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "white",
    marginTop: "10%",
    marginBottom: "2%",
    paddingLeft: "2%",
  },

  btnNearbyCafe: {
    width: Dimensions.get("window").width,
    height: "15%",
    borderTopWidth: 2,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    
  },

  btnConfirmReservation: {
    width: Dimensions.get("window").width,
    height: "15%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  btnMyPage: {
    width: Dimensions.get("window").width,
    height: "15%",
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default styles;
