import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Async_Storage = () => {
  // single key
  const [userInput, setUserInput] = useState({});
  const [userInput2, setUserInput2] = useState({});
  const [storedValue, setStoredValue] = useState({});
  //  multi key
  const [school, setSchool] = useState("");
  const [university, setUniversity] = useState("");
  const [storedSchool, setStoredSchool] = useState("");
  const [storedUniversity, setStoredUniversity] = useState("");
  const [updatedSchool, setUpdatedSchool] = useState("");
  const [updatedUniversity, setUpdatedUniversity] = useState("");
  // get all keys
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    handleGetData();
    handleGetMultiSet();
  }, []);
  const handleStoreData = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userInput));
      setStoredValue(userInput);
    } catch (e) {
      console.log("handleStoreData:", e);
    }
  };
  const handleGetData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (!value) return;
      const user = JSON.parse(value);
      setStoredValue(user);
    } catch (e) {
      console.log("handleGetData:", e);
    }
  };
  const handleMergeData = async () => {
    try {
      await AsyncStorage.mergeItem("user", JSON.stringify(userInput2));
      setStoredValue({
        name: storedValue.name,
        address: userInput2.address,
        age: userInput2.age,
      });
    } catch (e) {
      console.log("handleMergeData:", e);
    }
  };
  const handleRemove = async () => {
    try {
      await AsyncStorage.clear(); // clear the whole async storage
      setStoredValue("");
      setKeys([]);
    } catch (e) {
      console.log("remove User:", e);
    }
  };
  const handleMultiSet = async () => {
    try {
      await AsyncStorage.multiSet([
        ["school", school],
        ["university", university],
      ]);
      setStoredSchool(school);
      setStoredUniversity(university);
    } catch (e) {
      console.log("handleMultiSet:", e);
    }
  };
  const handleGetMultiSet = async () => {
    try {
      const value = await AsyncStorage.multiGet(["school", "university"]);
      setStoredSchool(value[0][1]);
      setStoredUniversity(value[1][1]);
    } catch (e) {
      console.log("handleGetMultiSet:", e);
    }
  };
  const handleGetAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      setKeys(keys);
    } catch (e) {
      console.log("handleGetAllKeys:", e);
    }
  };
  const handleRemoveSchool = async () => {
    try {
      await AsyncStorage.removeItem("school"); // it only removes the school key
      setStoredSchool("");
      setKeys(keys.filter((key) => key !== "school"));
    } catch (e) {
      console.log("handleRemoveSchool:", e);
    }
  };
  const handleMultiRemove = async () => {
    try {
      await AsyncStorage.multiRemove(["school", "university"]); // it only removes the school key
      setStoredSchool("");
      setStoredUniversity("");
      setKeys(keys.filter((key) => key !== "school" && key !== "university"));
    } catch (e) {
      console.log("handleMultiRemove:", e);
    }
  };
  // const handleMergeMultiSet = async () => {
  //   try {
  //     await AsyncStorage.multiMerge([
  //       ["school", updatedSchool],
  //       ["university", updatedUniversity],
  //     ]);
  //     setStoredSchool(updatedSchool);
  //     setStoredUniversity(updatedUniversity);
  //   } catch (e) {
  //     console.log("handleMergeMultiSet:", e);
  //   }
  // };
  return (
    <ScrollView>
      <Text style={styles.textHeader}>Handling Single Key</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput3}
        value={userInput.name}
        onChangeText={(text) => setUserInput({ name: text })}
        // onSubmitEditing={() => {
        //   if (!storedValue) return; //storedValue.name
        //   storeData(storedValue);
        //   setStoredValue(""); //{ name: "" }
        // }}
      />
      <TextInput
        placeholder="Address"
        style={styles.textInput3}
        value={userInput.address}
        onChangeText={(text) =>
          setUserInput({ name: userInput.name, address: text })
        }
      />
      <View style={styles.button}>
        <Button title="Save to async storage" onPress={handleStoreData} />
      </View>
      <TextInput
        placeholder="Update Address"
        style={styles.textInput4}
        value={userInput2.address}
        onChangeText={(text) => setUserInput2({ address: text })}
      />
      <TextInput
        placeholder="Age"
        style={styles.textInput4}
        value={userInput2.age}
        onChangeText={(text) =>
          setUserInput2({ age: text, address: userInput2.address })
        }
      />
      <View style={styles.button}>
        <Button title="Merge to Key" onPress={handleMergeData} />
      </View>
      <Text style={styles.textHeader}>Handling Multi Key</Text>
      <TextInput
        placeholder="School Name"
        style={styles.textInput}
        value={school}
        onChangeText={(text) => setSchool(text)}
      />
      <TextInput
        placeholder="University Name"
        style={styles.textInput}
        value={university}
        onChangeText={(text) => setUniversity(text)}
      />
      <View style={styles.button}>
        <Button title="Save to async storage" onPress={handleMultiSet} />
      </View>
      {/* <TextInput
        placeholder="School Name"
        style={styles.textInput2}
        value={updatedSchool}
        onChangeText={(text) => setUpdatedSchool(text)}
      />
      <TextInput
        placeholder="University Name"
        style={styles.textInput2}
        value={updatedUniversity}
        onChangeText={(text) => setUpdatedUniversity(text)}
      />
      <View style={styles.button}>
        <Button title="Merge to MultiKey" onPress={handleMergeMultiSet} />
      </View> */}
      {storedValue?.name && (
        <Text style={styles.text}>Hello {storedValue.name} 🤝</Text>
      )}
      {storedValue?.address && (
        <Text style={styles.text}>Address: {storedValue.address} 🏡</Text>
      )}
      {storedValue?.age && (
        <Text style={styles.text}>age: {storedValue.age}</Text>
      )}
      {storedSchool && (
        <Text style={styles.text}>School: {storedSchool} 🏨</Text>
      )}
      {storedUniversity && (
        <Text style={styles.text}>University: {storedUniversity} 🎓</Text>
      )}
      <View style={styles.button}>
        <Button title="Get All Keys" onPress={handleGetAllKeys} />
      </View>
      {keys.length > 0 && <Text style={styles.textHeader}>Keys 🗝️</Text>}
      {keys.map((key, index) => (
        <Text key={index} style={styles.text}>
          {key}
        </Text>
      ))}
      <View style={styles.button}>
        <Button title="Remove school" onPress={handleRemoveSchool} />
      </View>
      <View style={styles.button}>
        <Button
          title="Remove school and University"
          onPress={handleMultiRemove}
        />
      </View>
      <View style={styles.button}>
        <Button title="Remove async storage" onPress={handleRemove} />
      </View>
    </ScrollView>
  );
};
export default Async_Storage;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    backgroundColor: "#efd0ff",
    padding: 10,
    borderRadius: 10,
  },

  textInput4: {
    height: 40,
    margin: 12,
    backgroundColor: "#cceaff",
    padding: 10,
    borderRadius: 10,
  },
  textInput2: {
    height: 40,
    margin: 12,
    backgroundColor: "#ffe0ff",
    padding: 10,
    borderRadius: 10,
  },
  textInput3: {
    height: 40,
    margin: 12,
    backgroundColor: "#cce0ff",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0002ff",
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 80,
  },
});
