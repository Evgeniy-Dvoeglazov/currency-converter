// редьюсер состояния ошибки
import { IS_ERROR } from "../utils/constants";

const initialState = {
  error: false,
}

export const serverErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR:
      return {
        error: action.payload
      }

    default:
      return state;
  }
};
