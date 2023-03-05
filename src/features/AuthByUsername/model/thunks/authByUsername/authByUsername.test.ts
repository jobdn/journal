import axios, { AxiosResponse } from "axios";
import { User, userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests";
import { authByUsername } from "./authByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("authByUsername.test", () => {
  it("Should return existent user", async () => {
    const existentUser: User = { id: "1", username: "Dan" };
    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: existentUser,
      })
    );

    const thunk = new TestAsyncThunk(authByUsername);
    const result = await thunk.callThunk({
      password: "123",
      username: "Dan",
    });

    expect(thunk.dispatch).toBeCalledWith(
      userActions.setUserAuthData({ userAuthData: existentUser })
    );

    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  it("Should reject incorrect password or login", async () => {
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 403,
      },
    });
    const thunk = new TestAsyncThunk(authByUsername);

    const result = await thunk.callThunk({
      password: "123",
      username: "Dan",
    });

    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(result.payload).toBe("Incorrect login or password");
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
