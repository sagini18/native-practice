import { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";

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
export default ImageViewer;
