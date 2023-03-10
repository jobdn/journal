import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema } from "entities/Profile";
import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";
import { profileReducer, profileActions } from "./profileSlice";

describe("authSlice.test", () => {
  const initialState: ProfileSchema = {
    profileData: undefined,
    form: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
  };

  const profileData = {
    name: "Danya",
    lastname: "Peace",
    age: 213,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow3",
    username: "MAIN Admin",
    avatar: "",
  };

  const form = {
    name: "Danya111",
    lastname: "Peace111",
    age: 21,
    currency: Currency.RUB,
    country: Country.USA,
    city: "Moscow1111",
    username: "MAIN Admin111",
    avatar: "",
  };

  const profileState: DeepPartial<ProfileSchema> = {
    profileData,
    form,
    error: undefined,
    isLoading: false,
    readonly: true,
  };

  it("cleanFormData reducer", () => {
    expect(
      profileReducer(
        profileState as ProfileSchema,
        profileActions.cleanFormData()
      )
    ).toEqual({
      profileData,
      form: profileData, // Form is equal profileData when we clean form data
      error: undefined,
      isLoading: false,
      readonly: true,
    });
  });

  it("setReadonly reducer", () => {
    expect(
      profileReducer(undefined, profileActions.setReadonly(false))
    ).toEqual({ ...initialState, readonly: false });
  });

  it("updateProfile reducer", () => {
    expect(
      profileReducer(
        profileState as ProfileSchema,
        profileActions.updateForm({ age: 21 })
      )
    ).toEqual({ ...profileState, form: { ...form, age: 21 } });
  });

  // extra reducers
  it("pending fetchProfileData reducer", () => {
    expect(
      profileReducer(profileState as ProfileSchema, fetchProfileData.pending)
    ).toEqual({ ...profileState, isLoading: true });
  });

  it("fulfilled fetchProfileData reducer", () => {
    expect(
      profileReducer(initialState, fetchProfileData.fulfilled(profileData, ""))
    ).toEqual({ ...profileState, form: profileData, profileData });
  });
});
