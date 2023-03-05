export enum Currency {
  RUB = "RUB",
  EUR = "EUR",
  USD = "USD",
}
export enum Country {
  Russia = "Russia",
  USA = "USA",
}

export interface Profile {
  name: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}
