import React from "react";
import { useTranslation } from "react-i18next";

import { SelectOptions } from "shared/ui/Select";
import { Select } from "shared/ui/Select/Select";

import { Country } from "../../types/Country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const countryOptions: SelectOptions<Country> = [
  { value: Country.Russia, text: Country.Russia },
  { value: Country.USA, text: Country.USA },
];

export const CountrySelect: React.FC<CountrySelectProps> = (props) => {
  const { t } = useTranslation("profile");
  const { className, onChange, value = Country.Russia, readonly } = props;

  const handleCountryChange = (value: Country) => {
    onChange?.(value);
  };

  return (
    <Select
      label={t("choose_country")}
      className={className}
      options={countryOptions}
      onChange={handleCountryChange}
      value={value}
      disabled={readonly}
    />
  );
};
