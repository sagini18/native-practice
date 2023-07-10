import { FlatList, StyleSheet, Text } from "react-native";

export default function FlatListArray() {
  const colors = [
    { id: 1, value: "Yellow" },
    { id: 2, value: "Blue" },
    { id: 3, value: "Green" },
    { id: 4, value: "Black" },
    { id: 5, value: "Dark blue" },
    { id: 6, value: "Red" },
    { id: 7, value: "Yellow" },
    { id: 8, value: "Blue" },
    { id: 9, value: "Green" },
    { id: 10, value: "Black" },
    { id: 11, value: "Dark blue" },
    { id: 12, value: "Red" },
    { id: 13, value: "Yellow" },
    { id: 14, value: "Blue" },
    { id: 15, value: "Green" },
    { id: 16, value: "Black" },
    { id: 17, value: "Dark blue" },
    { id: 18, value: "Red" },
    { id: 19, value: "Yellow" },
    { id: 20, value: "Blue" },
    { id: 21, value: "Green" },
    { id: 22, value: "Black" },
    { id: 23, value: "Dark blue" },
    { id: 24, value: "Red" },
  ];
  return (
    <FlatList
      data={colors}
      renderItem={({ item }) => (
        <Text style={styles.row}>
          {item.id}. {item.value}
        </Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  row: {
    marginBottom: 5,
    backgroundColor: "skyblue",
    padding: 5,
  },
});
