import { Dispatch } from "react";
import { MainState } from "./RootReducer";

let dispatch: Dispatch<any>;
let getStateHandler: any;

export const initializeReduxService = (
  dispatchFunction: Dispatch<any>,
  getStateFunction: any,
) => {
  dispatch = dispatchFunction;
  getStateHandler = getStateFunction;
};

const getDispatch = () => dispatch;

const getState = () => getStateHandler() as MainState;

const dispatchAction = (action: any) => dispatch?.(action);

export const ReduxServices = {
  getDispatch,
  getState,
  dispatchAction,
};
