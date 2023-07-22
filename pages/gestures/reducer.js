export const initialState = {
  dragging: false,
  initialY: 50,
  initialX: 50,
  offSetY: 0,
  offSetX: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        dragging: true,
      };
    case "MOVE": {
      const { x, y } = action.payload;
      return { ...state, offSetX: x, offSetY: y };
    }
    case "END": {
      const { x, y } = action.payload;
      return {
        ...initialState,
        initialX: state.initialX + x,
        initialY: state.initialY + y,
      };
    }
  }
};
