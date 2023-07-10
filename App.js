import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Button } from "react-native";
import FlastList from "../AwesomeProject/pages/flatList.js";
import Flex from "../AwesomeProject/pages/flex.js";
import SectionList from "../AwesomeProject/pages/sectionList.js";
import ImageViewer from "../AwesomeProject/pages/imageViewer.js";
import ButtonTypes from "../AwesomeProject/pages/buttonTypes.js";
import Cafe from "../AwesomeProject/pages/cafe.js";
import Translate from "./pages/translate.js";
import To_Do from "./pages/to-do-list.js";

const Root = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Home">
        <Root.Screen name="Home" component={HomeScreen} />
        <Root.Screen name="Button Types" component={ButtonTypes} />
        <Root.Screen name="Cafe">
          {(props) => <Cafe {...props} count={1} />}
        </Root.Screen>
        <Root.Screen name="Translate" component={Translate} />
        <Root.Screen name="Image Viewer" component={ImageViewer} />
        <Root.Screen name="Flat List" component={FlastList} />
        <Root.Screen name="Flex" component={Flex} />
        <Root.Screen name="SectionList" component={SectionList} />
        <Root.Screen name="To-Do List" component={To_Do} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Button Types"
        onPress={() => navigation.navigate("Button Types")}
      />
      <Text />
      <Button
        title="Cafe"
        onPress={() => navigation.push("Cafe", { count: 2 })} //stack
      />
      <Text />
      <Button title="Translate" onPress={() => navigation.push("Translate")} />
      <Text />
      <Button
        title="Image Viewer"
        onPress={() => navigation.navigate("Image Viewer")} //tab
      />
      <Text />
      <Button
        title="Flat List"
        onPress={() => navigation.navigate("Flat List")}
      />
      <Text />
      <Button
        title="Section List"
        onPress={() => navigation.navigate("SectionList")}
      />
      <Text />
      <Button title="Flex" onPress={() => navigation.navigate("Flex")} />
      <Text />
      <Button
        title="To-Do List"
        onPress={() => navigation.navigate("To-Do List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
