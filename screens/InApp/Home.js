import * as React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import getHomeStyle from "../../styles/screens/HomeStyle";

function HomeScreen({ navigation }) {
  function InfoReservation() {
    //navigation.navigate()
  }
  function NearbyCafe() {
    //navigation.navigate()
  }

  function ConfirmReservation() {
    //
  }

  function MyPage() {
    //
  }

  return (
    <KeyboardAvoidingView style={getHomeStyle.container}>
      <View style={getHomeStyle.homeText}>
        <Text style={{ fontWeight: "700", fontSize: 65 }}>CAFE MOA</Text>
      </View>

      <View style={getHomeStyle.contentContainer}>
      <TouchableOpacity
          style={getHomeStyle.btnInfoReservation}
          onPress={() => navigation.navigate("Reservation")}
        >
          <Text style={{ color: "#ccc", fontSize: 30, margin : 10}}>예약정보</Text>
          <Text style={{ color: "#ccc", fontSize: 20, margin : 10}}>예약된 카페 :</Text>
          <Text style={{ color: "#ccc", fontSize: 20, margin : 10}}>예약된 시간 :</Text>
          <Text style={{ color: "#ccc", fontSize: 20, margin : 10}}>예약된 좌석 :</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={getHomeStyle.btnNearbyCafe}
          onPress={() => navigation.navigate("Cafe")}
        >
          <Text style={{ color: "black", fontSize: 45 }}>주변카페</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getHomeStyle.btnConfirmReservation}
          onPress={() => navigation.navigate("Reservation")}
        >
          <Text style={{ color: "black", fontSize: 45 }}>예약 확인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getHomeStyle.btnMyPage}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Text style={{ color: "black", fontSize: 45 }}>마이 페이지</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;
