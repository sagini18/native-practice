import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useReducer } from "react";

const FetchAPI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "loading" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "success", payload: json }))
      .catch((error) => dispatch({ type: "error" }));
  }, []);
  if (state.loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} size={100}></ActivityIndicator>
      </View>
    );
  }
  if (state.error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load posts!</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.container}
      data={state.posts}
      keyExtractor={(post) => post.id}
      renderItem={({ item: { id, body, title }, index }) => {
        return (
          <View key={id} style={styles.posts}>
            <Text style={styles.title}>
              {index + 1}. {title}
            </Text>
            <Text>{body}</Text>
          </View>
        );
      }}
    />
  );
};
export default FetchAPI;

export const initialState = {
  error: false,
  loading: true,
  posts: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "error":
      return { ...state, error: true, loading: false };
    case "success":
      return { ...state, posts: action.payload, loading: false };
  }
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#1dCfaf",
  },
  posts: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
