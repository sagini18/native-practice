import { StyleSheet, View, Animated, Button } from "react-native";
import React, { useRef } from "react";
// correct the bug

const Animation = () => {
  const value = useRef(new Animated.Value(0));

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Animate"
          onPress={() => {
            const animation = Animated.timing(value.current, {
              toValue: 1, // 1 is the final value
              useNativeDriver: true, // for better performance
            });
            animation.start();
          }}
        />
      </View>
      <Animated.Text
        style={{
          opacity: value.current,
          fontSize: 42,
          color: "blue",
          transform: [
            {
              translateX: value.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
            },
          ],
        }}
      >
        Animation
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Interpolate Close"
          onPress={() =>
            Animated.timing(value.current, {
              toValue: 0,
              useNativeDriver: true,
            }).start()
          }
        />
        <Animated.Text
          style={{
            opacity: value.current,
            fontSize: 42,
            transform: [
              {
                translateY: value.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 400],
                }),
              },
            ],
          }}
        >
          Hello!
        </Animated.Text>
      </View>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 60,
  },
});
