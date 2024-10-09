import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AccDetailSettings from "./AccDetailSettings";

const Accounts = () => {
  const [showAccDetSettings, setShowAccDetSettings] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: 18 }}>Details</Text>
        <TouchableOpacity onPress={() => setShowAccDetSettings(true)}>
          <Icon name="settings-outline" color={"#cccccc"} size={24}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.accountslist}>
        <View style={styles.account}>
          <View style={styles.accounttitle}>
            <Text style={styles.acctext}>Main Account</Text>
            <Text style={styles.acctext}>Limit Rs. 20,000</Text>
          </View>
          <View style={styles.mainaccountbar}>
            <View style={[styles.filledbar, { width: "40%" }]}></View>
            <View style={styles.accinner}>
              <Text>Rs. 5,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.account}>
          <View style={styles.accounttitle}>
            <Text style={styles.acctext}>Savings (like FD's)</Text>
          </View>
          <View style={styles.mainaccountbar}>
            <View style={[styles.filledbar, { width: "10%" }]}></View>
            <View style={styles.accinner}>
              <Text>Rs. 10,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.account}>
          <View style={styles.accounttitle}>
            <Text style={styles.acctext}>Invested (like Stocks)</Text>
            <Text style={styles.acctext}>Limit Rs. 5,00,000</Text>
          </View>
          <View style={styles.mainaccountbar}>
            <View style={[styles.filledbar, { width: "60%" }]}></View>
            <View style={styles.accinner}>
              <Text>Rs. 3,00,000</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        visible={showAccDetSettings}
        transparent={true}
        // animationType="slide"
        onRequestClose={() => setShowAccDetSettings(false)}
      >
        <View style={styles.accdetsettings}>
          <AccDetailSettings setShowAccDetSettings={setShowAccDetSettings} />
        </View>
      </Modal>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  accountslist: {
    flex: 1,
    gap: 10,
  },

  account: {
    flex: 1,
    flexDirection: "column",
  },

  accounttitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  acctext: {
    fontSize: 14,
    color: "white",
  },

  accinner: {
    position: "absolute",
    fontSize: 12,
    color: "black",
    paddingLeft: 5,
    width: "50%",
    borderColor: "black",
    borderRightWidth: 1,
  },

  mainaccountbar: {
    height: 18,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 7,
    overflow: "hidden",
  },
  filledbar: {
    height: "100%",
    backgroundColor: "#4caf50",
    borderRadius: 7,
  },

  accdetsettings: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    padding: 20,
  },
});
