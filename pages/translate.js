import { useState } from "react";
import { View, Text, TextInput } from "react-native";

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
export default Translate;
