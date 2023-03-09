import { Profile } from "./Profile";

export interface ProfileSchema {
  profileData?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly: boolean;
}
