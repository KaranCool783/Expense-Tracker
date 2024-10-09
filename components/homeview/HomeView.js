import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import Accounts from "./Accounts";
import RecentOrders from "./RecentOrders";

const HomeView = () => {
  const [selectedView, setselectedView] = useState("Accounts");

  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.panel}>
        <TouchableOpacity
          style={[
            styles.account,
            selectedView === "Accounts" && { borderColor: "white" },
          ]}
          onPress={() => setselectedView("Accounts")}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Accounts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.Goalsbudgets,
            selectedView === "BudgGoal" && { borderColor: "white" },
          ]}
          onPress={() => setselectedView("BudgGoal")}
        >
          <Text style={{ color: "white", fontSize: 17 }}>Goals & Budget</Text>
        </TouchableOpacity>
      </View>

      {selectedView === "Accounts" ? (
        <View style={styles.cardscontainer}>
          <View style={styles.cards}>
            <Accounts />
          </View>

          <View style={styles.cards}>
            <RecentOrders />
          </View>

          <View style={styles.cards}>
            <Text style={{ color: "white" }}>Other Cards can add more</Text>
            <Text style={{ color: "grey" }}>Item</Text>
            <Text style={{ color: "grey" }}>Item</Text>
            <Text style={{ color: "grey" }}>Item</Text>
            <Text style={{ color: "grey" }}>Item</Text>
          </View>
        </View>
      ) : (
        <View style={styles.cardscontainer}>
          <View style={styles.cards}>
            <Text style={{ color: "white" }}>Other Cards can add more</Text>
            <Text style={{ color: "grey" }}>Item</Text>
            <Text style={{ color: "grey" }}>Item</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  maincontainer: {
    padding: 10,
  },

  panel: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.2,
    padding: 10,
    // borderBottomWidth: 2,
    // borderColor: "grey",
  },

  account: {
    width: "50%",
    borderBottomWidth: 3,
    alignItems: "center",
    padding: 10,
  },

  Goalsbudgets: {
    width: "50%",
    borderBottomWidth: 3,
    // borderColor: "white",
    alignItems: "center",
    padding: 10,
  },

  cardscontainer: {
    flex: 0.8,
  },

  cards: {
    backgroundColor: "#11161D",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    borderWidth: 0.6,
    borderColor: "grey",
  },

  activeView: {
    borderColor: "white",
  },
});
