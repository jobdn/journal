import React from "react";
import { useTranslation } from "react-i18next";

import { SelectOptions } from "shared/ui/Select";
import { Select } from "shared/ui/Select/Select";

import { Currency } from "../../types/Currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const currencyOptions: SelectOptions<Currency> = [
  { value: Currency.EUR, text: Currency.EUR },
  { value: Currency.RUB, text: Currency.RUB },
  { value: Currency.USD, text: Currency.USD },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  const { t } = useTranslation("profile");
  const { className, onChange, value = Currency.RUB, readonly } = props;

  const handleCurrencyChange = (value: Currency) => {
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
