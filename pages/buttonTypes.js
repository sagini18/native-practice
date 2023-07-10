import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";

const ButtonTypes = () => {
  const [count, setCount] = useState(0);
  const [underlayColor, setUnderlayColor] = useState(0);
  const [rippleColor, setRippleColor] = useState("Black");
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacityButton}
        activeOpacity={0.7}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.touchableOpacity}> TouchableOpacity! </Text>
      </TouchableOpacity>
      <Text>Pressed {count} Times</Text>
      <TouchableHighlight
        style={styles.touchableOpacityButton}
        underlayColor="skyblue"
        onPress={() => setUnderlayColor(underlayColor + 1)}
      >
        <Text>TouchableHighlight - UnderlayColor</Text>
      </TouchableHighlight>
      <Text>{underlayColor} Sky Blue</Text>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor("red");
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback?.Ripple(
          rippleColor,
          rippleOverflow
        )}
      >
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  touchableOpacity: { margin: 2, padding: 5 },
  touchableOpacityButton: {
    backgroundColor: "lightgreen",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "green",
    padding: 32,
  },
  touchable: { flex: 0.5, borderColor: "black", borderWidth: 1 },
  text: { alignSelf: "center" },
});

export default ButtonTypes;
