const initialState = {
  servants: [],
  allServants: [],
  servantsId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SERVANTS":
      return {
        ...state,
        servants: action.payload,
        allServants: action.payload,
      };
    case "GET_SERVANTS_NAME":
      return {
        ...state,
        servants: action.payload,
      };
    case "GET_SERVANTS_ID":
      return {
        ...state,
        servantsId: action.payload,
      };
    default:
      return state;
  }
}
