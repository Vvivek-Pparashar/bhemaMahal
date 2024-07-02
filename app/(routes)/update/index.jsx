import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { CounterContext } from "../../../context/newVehicle";

const index = () => {
  // const { counter, increment, decrement } = useContext(CounterContext);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
      {/* <Button title="Increment" onPress={increment} /> */}
      {/* <Button title="Decrement" onPress={decrement} /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
});
