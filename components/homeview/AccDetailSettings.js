import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AccDetailSettings = ({ setShowAccDetSettings }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Title goes here!</Text>

      <Text style={{ color: "white" }}>Hello</Text>
      <Text style={{ color: "white" }}>Hello</Text>
      <Text style={{ color: "white" }}>Hello</Text>

      <View>
        <TouchableOpacity onPress={() => setShowAccDetSettings(false)}>
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowAccDetSettings(false)}>
          <Text style={{ color: "white" }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccDetailSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11161D",
    borderRadius: 10,
    width: "100%",
    padding: 15,
    marginVertical: 8,
    borderWidth: 0.6,
    borderColor: "grey",
  },
});
