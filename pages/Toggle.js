import { View, Button, Text, StyleSheet } from "react-native";

export default function Toggle({ label, value, options, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Button
            title={option}
            key={option}
            onPress={() => onChange(option)}
            color={option === value ? "blue" : "gray"}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 12,
  },
  label: {
    fontSize: 14,
    padding: 4,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 5,
    columnGap: 3,
  },
});
