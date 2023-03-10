import { AxiosResponse } from "axios";
import { TestAsyncThunk } from "shared/lib/tests";

import { fetchProfileData } from "./fetchProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import i18next from "i18next";

describe("fetchProfileData.test", () => {
  const profileData = {
    age: 21,
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
    name: "Dan",
    lastname: "Pisarev",
    avatar: "",
    username: "Admin",
  };

  it("Should fetch profile data", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        data: profileData,
      })
    );
    const result = await thunk.callThunk();

    expect(thunk.api.get).toBeCalledTimes(1);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(profileData);
  });

  it("Should reject profile request", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockRejectedValue({
      response: {
        status: 403,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.api.get).toBeCalledTimes(1);
    expect(result.payload).toBe(i18next.t("error.server_down"));
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
