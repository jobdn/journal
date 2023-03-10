import { AxiosResponse } from "axios";
import { User, userActions } from "entities/User";
import i18next from "i18next";
import { TestAsyncThunk } from "shared/lib/tests";
import { authByUsername } from "./authByUsername";

describe("authByUsername.test", () => {
  it("Should return existent user", async () => {
    const existentUser: User = { id: "1", username: "Dan" };

    const thunk = new TestAsyncThunk(authByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: existentUser,
      })
    );
    const result = await thunk.callThunk({
      password: "123",
      username: "Dan",
    });

    expect(thunk.dispatch).toBeCalledWith(
      userActions.setUserAuthData({ userAuthData: existentUser })
    );

    expect(thunk.api.post).toBeCalledTimes(1);
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  it("Should reject incorrect password or login", async () => {
    const thunk = new TestAsyncThunk(authByUsername);
    thunk.api.post.mockRejectedValue({
      response: {
        status: 403,
      },
    });

    const result = await thunk.callThunk({
      password: "123",
      username: "Dan",
    });

    expect(thunk.api.post).toBeCalledTimes(1);
    expect(result.payload).toBe(i18next.t("error.incorrect_login"));
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
  it("Should reject if server is down", async () => {
    const thunk = new TestAsyncThunk(authByUsername);
    thunk.api.post.mockRejectedValue({
      response: {
        status: 500,
      },
    });

    const result = await thunk.callThunk({
      password: "123",
      username: "Dan",
    });

    expect(thunk.api.post).toBeCalledTimes(1);
    expect(result.payload).toBe(i18next.t("error.server_down"));
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
