import { cn } from "shared/lib";

import classes from "./Select.module.scss";
import { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = (props) => {
  const { className, label, name, id, options, value, onChange, disabled } =
    props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn("", {}, [className])}>
      {label && <span>{label}</span>}
      <select
        name={name}
        id={id}
        className={classes.Select}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
};
