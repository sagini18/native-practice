import { SectionList, StyleSheet, Text } from "react-native";

export default function SectionListArray({ navigation, route }) {
  const sections = [
    {
      id: 0,
      title: "Basic Colours",
      data: [
        { id: 0, value: "Red" },
        { id: 1, value: "Green" },
        { id: 2, value: "Blue" },
      ],
      renderItem: ({ item }) => {
        return <Text style={styles.row}>{item.value}</Text>;
      },
    },
    {
      id: 1,
      title: "Mixed Colours",
      data: [
        { id: 0, value: "Light blue" },
        { id: 1, value: "Light green" },
        { id: 2, value: "Orange" },
      ],
      renderItem: ({ item }) => (
        <Text style={styles.rowDark}>{item.value}</Text>
      ),
    },
  ];
  return (
    <SectionList
      sections={sections}
      //   homogenous section
      //   renderItem={({ item }) => <Text style={styles.row}>{item.value}</Text>}
      //   renderSectionHeader={({ section }) => (
      //     <Text style={styles.header}>{section.title}</Text>
      //   )}
      //   heterogenous section
      renderSectionHeader={({ section }) => {
        return <Text style={styles.header}>{section.title}</Text>;
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  row: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: "skyblue",
  },
  header: {
    marginBottom: 5,
    padding: 4,
    backgroundColor: "steelblue",
    marginTop: 10,
  },
  rowDark: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: "darkblue",
    color: "wheat",
  },
});
