import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import HomeView from "../components/homeview/HomeView";
import PlannedPayments from "../components/plannedpayments/PlannedPayments";
import BorrowAndLending from "../components/borrowslendings/BorrowAndLending";
import Records from "../components/records/Records";
import Settings from "../components/settings/Settings";
import Statistics from "../components/statistics/Statistics";
import { TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const MainView = () => {
  const [selectedView, setSelectedView] = useState("Home");
  const [isMenuSelected, setIsMenuSelected] = useState(false);

  const renderView = () => {
    switch (selectedView) {
      case "Home":
        return <HomeView />;
      case "PlannedPayments":
        return <PlannedPayments />;
      case "BorrowAndLending":
        return <BorrowAndLending />;
      case "Records":
        return <Records />;
      case "Settings":
        return <Settings />;
      case "Statistics":
        return <Statistics />;
      default:
        return <HomeView />;
    }
  };

  const handleMenuSelection = (view) => {
    setSelectedView(view);
    setIsMenuSelected(false);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.titlearea}>
        <View style={styles.titlebar}>
          <View style={styles.titlename}>
            <TouchableOpacity onPress={() => setIsMenuSelected(true)}>
              <Icon name="reorder-four-outline" color={"#ccc"} size={28}></Icon>
            </TouchableOpacity>

            <Text style={styles.titletext}>{selectedView}</Text>
          </View>
          <View style={styles.titlenotify}>
            <TouchableOpacity>
              <Icon
                name="notifications-outline"
                color={"#cccccc"}
                size={24}
              ></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.contentarea}>{renderView()}</View>

      {isMenuSelected && (
        <View style={styles.menu}>
          <View style={styles.menulist}>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("Home")}
            >
              <Text style={styles.textcolor}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("Records")}
            >
              <Text style={styles.textcolor}>Records</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("BorrowAndLending")}
            >
              <Text style={styles.textcolor}>Borrows & Lendings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("PlannedPayments")}
            >
              <Text style={styles.textcolor}>Planned Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("Statistics")}
            >
              <Text style={styles.textcolor}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menulistbutton}
              onPress={() => handleMenuSelection("Settings")}
            >
              <Text style={styles.textcolor}>Settings</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.menuemptyside}
            onPress={() => setIsMenuSelected(false)}
          ></TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    backgroundColor: "#000000",
  },

  titlearea: {
    backgroundColor: "#212830",
    height: "12%",
    flex: 0.12,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#999",
  },

  titlebar: {
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    bottom: 10,
    padding: 5,
    alignItems: "center",
  },

  titlename: {
    flex: 1,
    flexDirection: "row",
  },

  titletext: {
    fontSize: 20,
    color: "#cccccc",
    marginLeft: 10,
    fontWeight: "bold",
  },

  titlenotify: {},

  contentarea: {
    flex: 0.88,
  },

  menu: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },

  menulist: {
    width: "60%",
    backgroundColor: "#0D1117",
    flex: 1,
    paddingTop: 60,
    padding: 10,
    gap: 15,
    borderRadius: 10,
  },

  menuemptyside: {
    width: "40%",
  },

  textcolor: {
    color: "#aaa",
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
  },

  menulistbutton: {
    width: "100%",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});
