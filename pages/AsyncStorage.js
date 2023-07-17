import { TextInput, Text, StyleSheet, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Async_Storage = () => {
  const [name, setName] = useState({ name: "" });
  const [storedValue, setStoredValue] = useState({ name: "" });
  const storeData = async (value) => {
    try {
      // store string value
      //   await AsyncStorage.setItem("key", value);
      //   setName(value);
      //   store object value
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("key", jsonValue);
      setName(value);
    } catch (e) {
      console.log("StoreData:", e);
    }
  };
  const getData = async () => {
    try {
      //   const value = await AsyncStorage.getItem("key");
      //   if (value !== null) {
      //     // value previously stored
      //     console.log("get value:", value);
      //     setName(value);
      // return value;
      // get object value
      const jsonValue = await AsyncStorage.getItem("key");
      if (jsonValue != null) {
        const Object = JSON.parse(jsonValue);
        setName(Object);
      }

      //   }
    } catch (e) {
      console.log("getData :", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleRemoveUser = async () => {
    try {
      await AsyncStorage.clear();
      setName("");
    } catch (e) {
      console.log("remove User:", e);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Type your name, hit enter, and refresh!"
        style={styles.textInput}
        onChangeText={(text) => setStoredValue({ name: text })}
        value={storedValue.name}
        onSubmitEditing={() => {
          if (!storedValue.name) return;
          storeData(storedValue);
          setStoredValue({ name: "" });
        }}
      />
      <Text style={styles.text}>Hello {name.name}</Text>
      <Button title="Remove async storage" onPress={handleRemoveUser} />
    </View>
  );
};
export default Async_Storage;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    backgroundColor: "#effefe",
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
