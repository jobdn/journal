import { AxiosResponse } from "axios";
import { TestAsyncThunk } from "shared/lib/tests";

import { saveProfile } from "./saveProfile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import i18next from "i18next";

describe("saveProfile.test", () => {
  const profileData = {
    id: "1",
    age: 21,
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
    name: "Dan",
    lastname: "Pisarev",
    avatar: "",
    username: "Admin",
  };

  it("Should return profile", async () => {
    const thunk = new TestAsyncThunk(saveProfile, {
      profile: { form: profileData },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        data: profileData,
      })
    );
    const result = await thunk.callThunk("1");

    expect(thunk.api.put).toBeCalledTimes(1);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(profileData);
  });

  it("Should reject profile request", async () => {
    const thunk = new TestAsyncThunk(saveProfile, {
      profile: { form: profileData },
    });

    thunk.api.put.mockRejectedValue({
      response: {
        status: 403,
      },
    });

    const result = await thunk.callThunk("1");

    expect(thunk.api.put).toBeCalledTimes(1);
    expect(result.payload).toBe(i18next.t("error.profile_loading"));
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
