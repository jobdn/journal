import React, { Fragment, ReactNode } from "react";
import { Listbox as HeadlessListBox, Transition } from "@headlessui/react";

import { cn } from "shared/lib";

import classes from "./ListBox.module.scss";
import { Button, ButtonVariant } from "../Button";
import { HStack } from "../Stack";

export interface Option<T> {
  value: T;
  content: ReactNode;
  unavailable?: boolean;
}

export type ListBoxDirection = "top" | "bottom";

interface ListBoxProps<T> {
  className?: string;
  options: Option<T>[];
  value: string;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  label?: string;
  direction?: ListBoxDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    defaultValue,
    onChange,
    options,
    value,
    readonly,
    label,
    direction = "bottom",
  } = props;

  return (
    <HeadlessListBox value={value} onChange={onChange}>
      <div className={cn(classes.ListBoxWrapper, {}, [className])}>
        <HStack gap="8">
          {label && <label>{label}</label>}
          <HeadlessListBox.Button className={classes.trigger}>
            <Button variant={ButtonVariant.OUTLINED} disabled={readonly}>
              {value || defaultValue}
            </Button>
          </HeadlessListBox.Button>
        </HStack>

        <Transition
          enter="enter"
          enterFrom="enterFrom"
          enterTo="enterTo"
          leave="leave"
          leaveFrom="leaveFrom"
          leaveTo="leaveTo"
        >
          <HeadlessListBox.Options
            className={cn(classes.options, {}, [classes[direction]])}
          >
            {options.map((option) => (
              <HeadlessListBox.Option
                key={option.value}
                value={option.value}
                disabled={option.unavailable}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    className={cn(classes.optionItem, {
                      [classes.active]: active,
                      [classes.selected]: selected,
                    })}
                  >
                    {option.content}
                  </li>
                )}
              </HeadlessListBox.Option>
            ))}
          </HeadlessListBox.Options>
        </Transition>
      </div>
    </HeadlessListBox>
  );
};
