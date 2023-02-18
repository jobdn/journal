import { Resource } from "i18next";

const ns = ["translation", "home", "about"];
const supportedLngs = ["en", "ru"];

export const resources: Resource = ns.reduce(
  (acc: Record<string, Record<string, string>>, n) => {
    supportedLngs.forEach((lng) => {
      if (!acc[lng]) acc[lng] = {};
      acc[lng] = {
        ...acc[lng],
        [n]: require(`../../../../public/locales/${lng}/${n}.json`),
      };
    });
    return acc;
  },
  {}
);
