import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";

export type ThunkActionCreator<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

jest.mock("axios");

export class TestAsyncThunk<R, Arg, C> {
  thunkActionCreator: ThunkActionCreator<R, Arg, C>;
  dispatch: AppDispatch;
  getState: () => StateSchema;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(thunkActionCreator: ThunkActionCreator<R, Arg, C>) {
    this.thunkActionCreator = thunkActionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = jest.mocked(axios, true);
  }

  async callThunk(arg: Arg) {
    const thunkAction = this.thunkActionCreator(arg);
    const result = await thunkAction(this.dispatch, this.getState, {
      api: this.api,
    });
    return result;
  }
}
