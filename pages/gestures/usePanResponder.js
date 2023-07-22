import { PanResponder } from "react-native";
import { useReducer, useRef } from "react";
import { initialState, reducer } from "./reducer";

export default function usePanResponder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Should we claim the interaction lock when the user presses down on the square?
  const handleStartShouldSetPanResponder = (e, gestureState) => true;
  const handlePanResponderGrant = (e, gestureState) => {
    dispatch({ type: "START" });
  };
  const handlePanResponderMove = (e, gestureState) => {
    dispatch({
      type: "MOVE",
      payload: { x: gestureState.dx, y: gestureState.dy },
    });
  };
  const handlePanResponderEnd = (e, gestureState) => {
    dispatch({
      type: "END",
      payload: { x: gestureState.dx, y: gestureState.dy },
    });
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  ).current;
  return [state, panResponder.panHandlers];
}
