import React from "react";
import { useTranslation } from "react-i18next";

import { Currency } from "../../types/Currency";
import { ListBox, Option } from "shared/ui/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const currencyOptions: Option<Currency>[] = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  const { t } = useTranslation("profile");
  const { className, onChange, value = Currency.RUB, readonly } = props;

  const handleCurrencyChange = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <ListBox
      className={className}
      value={value}
      onChange={handleCurrencyChange}
      options={currencyOptions}
      readonly={readonly}
      label={t("choose_currency")}
      direction="top"
    />
  );
};
