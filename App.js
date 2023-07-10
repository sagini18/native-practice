import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import FlastList from "../AwesomeProject/pages/flatList.js";
import Flex from "../AwesomeProject/pages/flex.js";
import SectionList from "../AwesomeProject/pages/sectionList.js";

const Root = createNativeStackNavigator();

export default function App({ navigation, route }) {
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
    </View>
  );
};
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
const ImageViewer = () => {
  const [fullName, setFullName] = useState();
  const getFullName = (firstName = "Puzzy", lastname = "Cat") => {
    return firstName + " " + lastname;
  };
  return (
    <View>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        alt="cat"
        style={{ width: 200, height: 200, marginLeft: 25 }}
      ></Image>
      <Text> Hello, I am {getFullName(fullName)}!</Text>
      <TextInput
        style={{
          height: 40,
          width: 90,
          borderColor: "gray",
          borderWidth: 1,
          paddingStart: 5,
        }}
        onChangeText={(val) => setFullName(val)}
        defaultValue="Name me!"
      />
    </View>
  );
};
const Cafe = ({ count, route }) => {
  const [thirsty, setThirsty] = useState(true);
  return (
    <View>
      <Text>
        {" "}
        I am at number {count} or {route.params.count} Cafe..☕
      </Text>
      <Button
        onPress={() => setThirsty(!thirsty)}
        title={thirsty ? "Pour some coffee" : "Thank you!"}
      />
    </View>
  );
};
const Translate = ({ navigation, route }) => {
  const [newText, setNewText] = useState("");
  return (
    <View>
      <TextInput
        style={{
          marginTop: 30,
          borderWidth: 2,
          borderColor: "gray",
          textAlign: "center",
        }}
        defaultValue="Type here to translate into Pizza language"
        onChangeText={(newText) => setNewText(newText)}
      />
      <Text style={{ marginTop: 5 }}>
        {newText
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
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
