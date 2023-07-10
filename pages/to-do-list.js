import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useReducer, useState } from "react";

const To_Do = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Input
        onSubmit={(title) =>
          dispatch({ type: "add", payload: createTodo(title) })
        }
      />
      <List
        todos={state.todos}
        onPressRemove={(id) => dispatch({ type: "remove", payload: id })}
      />
    </View>
  );
};
const Input = ({ onSubmit }) => {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={{ backgroundColor: "skyblue", padding: 15 }}
      value={text}
      placeholder="Add a todo"
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return;
        onSubmit(text);
        setText("");
      }}
    />
  );
};
const List = ({ todos, onPressRemove }) => {
  const itemColor = (index) => {
    return `rgba(59, 108, 212, ${Math.max(1 - index / 10, 0.5)})`;
  };
  return (
    <FlatList
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: itemColor(index),
            marginVertical: 2,
          }}
          onPress={() => onPressRemove(item.id)}
        >
          <Text style={{ color: "#ffffff" }}>{item.text}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
const createTodo = (text) => ({
  id: Math.random().toString(10),
  text,
});
const initialState = {
  todos: [
    createTodo("Learn about reducers"),
    createTodo("Get some sleep"),
    createTodo("Rock and roll"),
    createTodo("Other stuff"),
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
  }
};
export default To_Do;
