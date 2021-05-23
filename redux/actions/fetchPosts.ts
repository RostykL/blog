import axios from "axios";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { fetch_posts } from "../types";

export const fetchposts = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const res = await axios.get("https://simple-blog-api.crew.red/posts");
    dispatch({
      type: fetch_posts,
      payload: res.data,
    });
  };
};
