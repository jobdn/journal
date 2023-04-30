import React, { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useFloating, offset, flip, shift } from "@floating-ui/react-dom";
import type { Placement } from "@floating-ui/react-dom";

import { cn } from "shared/lib";

import classes from "./Dropdown.module.scss";
import { AppLink } from "../AppLink";

export interface DropdownOption {
  content: ReactNode;
  action?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  placement?: Placement;
  options: DropdownOption[];
  trigger: ReactNode;
}

const GAP = 5;

const renderOption = (option: DropdownOption) => {
  if (option?.href) {
    return (
      <Menu.Item disabled={option.disabled} key={option.href} as={Fragment}>
        {({ active }) => (
          <AppLink
            to={option.href as string}
            className={cn(classes.item, { [classes.active]: active }, [])}
          >
            {option.content}
          </AppLink>
        )}
      </Menu.Item>
    );
  }

  return (
    <Menu.Item as={Fragment} disabled={option.disabled}>
      {({ active }) => (
        <button
          className={cn(classes.btnItem, { [classes.active]: active }, [])}
          onClick={option.action}
          disabled={option.disabled}
        >
          {option.content}
        </button>
      )}
    </Menu.Item>
  );
};

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { className, placement = "bottom", options, trigger } = props;
  const { refs, x, y } = useFloating({
    placement,
    middleware: [offset(GAP), flip(), shift({ padding: 10 })],
  });

  const dropdownPos = React.useMemo<React.CSSProperties>(
    () => ({
      top: y ?? 0,
      left: x ?? 0,
      width: "max-content",
    }),
    [x, y]
  );

  return (
    <Menu as="div" className={cn(classes.Dropdown, {}, [className])}>
      <Menu.Button className={classes.trigger} ref={refs.setReference}>
        {trigger}
      </Menu.Button>
      <Transition
        enter="enter"
        enterFrom="enterFrom"
        enterTo="enterTo"
        leave="leave"
        leaveFrom="leaveFrom"
        leaveTo="leaveTo"
      >
        <Menu.Items
          className={classes.itemList}
          ref={refs.setFloating}
          style={dropdownPos}
        >
          {options.map(renderOption)}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
