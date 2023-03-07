import { Profile } from "./Profile";

export interface ProfileSchema {
  profileData: Profile | null;
  isLoading: boolean;
  error: string | null;
  readonly: boolean;
}
