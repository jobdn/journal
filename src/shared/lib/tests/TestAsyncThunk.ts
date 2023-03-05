import { AsyncThunkAction } from "@reduxjs/toolkit";

export type ThunkActionCreator<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<R, Arg, C> {
  thunkActionCreator: ThunkActionCreator<R, Arg, C>;
  dispatch: AppDispatch;
  getState: () => StateSchema;

  constructor(thunkActionCreator: ThunkActionCreator<R, Arg, C>) {
    this.thunkActionCreator = thunkActionCreator;
    this.dispatch = jest.fn();
    this.dispatch = jest.fn();
  }

  async callThunk(arg: Arg) {
    const thunkAction = this.thunkActionCreator(arg);
    const result = await thunkAction(this.dispatch, this.getState, undefined);
    return result;
  }
}
