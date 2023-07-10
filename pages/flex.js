import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Toggle from "./Toggle";

const Flex = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const layoutStyle = { flexDirection, justifyContent, alignItems };

  const justify = flexDirection === "row" ? "Horizontal " : "Vertical ";
  const align = flexDirection === "row" ? "Vertical " : "Horizontal ";

  return (
    <View style={style.layout}>
      <Toggle
        label={"flex Direction"}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => setFlexDirection(option)}
      />
      <Toggle
        label={`${justify}distribution (justify-content)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => setJustifyContent(option)}
      />
      <Toggle
        label={`${align}distribution (align-items)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => setAlignItems(option)}
      />
      <View style={[layoutStyle, style.layout]}>
        <View style={style.box}></View>
        <View style={style.box}></View>
        <View style={style.box}></View>
      </View>
    </View>
  );
};
const flexDirectionOptions = ["row", "column"];
const justifyContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-around",
  "space-between",
];
const alignItemsOptions = ["flex-start", "center", "flex-end", "stretch"];
const style = StyleSheet.create({
  box: {
    padding: 25,
    backgroundColor: "#3B6CD4",
    margin: 5,
  },
  layout: {
    flex: 1,
    marginTop: 18,
    marginLeft: 3,
    backgroundColor: "rgba(0,0,98,0.05)",
  },
});
export default Flex;
