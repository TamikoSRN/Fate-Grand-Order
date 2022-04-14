const initialState = {
  servants: [],
  allServant: [],
  servantsId: [],
  grandOrders: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SERVANTS":
      return {
        ...state,
        servants: action.payload,
        allServant: action.payload,
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
    case "GET_GRAND_ORDER":
      return {
        ...state,
        grandOrders: action.payload,
      };
    default:
      return state;
  }
}
