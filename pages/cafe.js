import { useState } from "react";
import { View, Text, Button } from "react-native";
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
export default Cafe;
