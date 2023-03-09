import React from "react";
import { useTranslation } from "react-i18next";

import { Option } from "shared/ui/Select";
import { Select } from "shared/ui/Select/Select";

import { Currency } from "../../types/Currency";

interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const currencyOptions: Option[] = [
  { value: Currency.EUR, text: Currency.EUR },
  { value: Currency.RUB, text: Currency.RUB },
  { value: Currency.USD, text: Currency.USD },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  const { t } = useTranslation("profile");
  const { className, onChange, value, readonly } = props;

  const handleCurrencyChange = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <Select
      label={t("choose_currency")}
      className={className}
      options={currencyOptions}
      onChange={handleCurrencyChange}
      value={value}
      disabled={readonly}
    />
  );
};
