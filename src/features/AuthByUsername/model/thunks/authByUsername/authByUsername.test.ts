import { StateSchema } from "app/config/StoreProvider";
import axios, { AxiosResponse } from "axios";
import { User, userActions } from "entities/User";
import { authByUsername } from "./authByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("authByUsername.test", () => {
  let dispatch: AppDispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it("Should return existent user", async () => {
    const existentUser: User = { id: "1", username: "Dan" };
    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: existentUser,
      })
    );
    const authByUsernameAction = authByUsername({
      password: "123",
      username: "Dan",
    });
    const result = await authByUsernameAction(dispatch, getState, undefined);

    expect(dispatch).toBeCalledWith(
      userActions.setUserAuthData({ userAuthData: existentUser })
    );

    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(3);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  it("Should reject incorrect password or login", async () => {
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 403,
      },
    });
    const authByUsernameAction = authByUsername({
      password: "123",
      username: "Dan",
    });

    const result = await authByUsernameAction(dispatch, getState, undefined);

    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(result.payload).toBe("Incorrect login or password");
    expect(dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
