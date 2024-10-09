import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Accounts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: 18 }}>Accounts List</Text>
        <View>
          <Icon name="notifications-outline" color={"#cccccc"} size={24}></Icon>
          <Icon name="notifications-outline" color={"#cccccc"} size={24}></Icon>
        </View>
      </View>

      <View style={styles.accountslist}>
        <Text style={{ color: "grey" }}>Item</Text>
        <Text style={{ color: "grey" }}>Item</Text>
        <Text style={{ color: "grey" }}>Item</Text>
        <Text style={{ color: "grey" }}>Item</Text>
        <Text style={{ color: "grey" }}>Item</Text>
      </View>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },

  title: {
    alignItems: "center",
  },

  accountslist: {},
});
