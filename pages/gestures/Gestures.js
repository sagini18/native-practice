import { StyleSheet, Text, View } from "react-native";
import React from "react";
import usePanResponder from "./usePanResponder";

const Gestures = () => {
  const [state, panHandlers] = usePanResponder();
  const { initialX, initialY, offSetX, offSetY, dragging } = state;
  const style = {
    backgroundColor: dragging ? "#2DC" : "#0BA",
    transform: [
      { translateX: initialX + offSetX },
      { translateY: initialY + offSetY },
    ],
  };
  return (
    <View style={styles.container}>
      <View {...panHandlers} style={[styles.square, style]}>
        <Text style={styles.text}>Drag Me</Text>
      </View>
    </View>
  );
};

export default Gestures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

// library: react-native-gesture-hander
