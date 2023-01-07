import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstansts";
import axios from 'axios'
// CREATE ORDER ACTION CREATOR
export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });
  
      // token destructure from getState , from userInfo
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token.token}`,
        },
      };
  console.log(order)
      const { data } = await axios.post(`/api/orders`, order, config);
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  