import axios from "axios";
import { USER_DATA } from "shared/constants";

export const api = axios.create({
  // baseURL: JSON.stringify(__API__),
  baseURL: __API__,
  headers: {
    // При открытии страницы профиля, запрос на ручку /profile у НЕАВТОРИЗОВАННОГО пользовалетя будет падать, потому что изначально у  НЕАВТОРИЗОВАННОГО пользователя в localStorage ничего не храниться, а после авторизации этот заголовок не меняется
    Authorization: localStorage.getItem(USER_DATA) || "",
  },
});
