// import axios from "axios";

// export const getServants = () => {
//   return async (dispatch) => {
//     const response = await axios.get("http://localhost:3000/servants");
//     if (response?.data) {
//       dispatch({
//         type: "GET_SERVANTS",
//         payload: { servants: response.data },
//       });
//     }
//   };
// };

export const getServants = () => (dispatch) => {
  return fetch("http://localhost:3000/servants")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "GET_SERVANTS",
        payload: json,
      });
    });
};

export const getServantsName = (name) => (dispatch) => {
  return fetch(`https://localhost:3000/servants?name=${name}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "GET_SERVANTS_NAME",
        payload: json,
      });
    });
};

export const getServantsById = (id) => (dispatch) => {
  return fetch(`http://localhost:3000/servants/:${id}`)
    .then((response) => response.json)
    .then((json) => {
      dispatch({
        type: "GET_SERVANTS_ID",
        payload: json,
      });
    });
};
