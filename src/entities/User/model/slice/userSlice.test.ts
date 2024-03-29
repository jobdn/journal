import { USER_DATA } from "shared/constants";
import { User, userActions, userReducer } from "../..";
import { UserSchema } from "../../types/UserSchema";

describe("userSlice.test", () => {
  const initialState: UserSchema = { userData: null, isAuth: false };

  const userState: UserSchema = { userData: null };

  const userData: User = {
    id: "1",
    username: "Dan",
  };

  const expectedState: UserSchema = {
    userData,
    isAuth: true,
  };

  it("Should set user data", () => {
    expect(
      userReducer(
        userState,
        userActions.setUserAuthData({
          userAuthData: { id: "1", username: "Dan" },
        })
      )
    ).toEqual(expectedState);
  });

  it("Should set user data with empty initial state", () => {
    expect(
      userReducer(
        undefined,
        userActions.setUserAuthData({
          userAuthData: { id: "1", username: "Dan" },
        })
      )
    ).toEqual(expectedState);
  });

  it("Should set user data if user was logged in", () => {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
    expect(userReducer(undefined, userActions.checkAuth())).toEqual(
      expectedState
    );
  });

  it("Should not set user data if user was not logged in", () => {
    localStorage.clear();
    expect(userReducer(undefined, userActions.checkAuth())).toEqual(
      initialState
    );
  });

  it("Should log out user", () => {
    userReducer(
      undefined,
      userActions.setUserAuthData({
        userAuthData: { id: "1", username: "Dan" },
      })
    );

    const logOutedUser = userReducer(undefined, userActions.logout());
    expect(logOutedUser).toEqual(initialState);
  });
});
