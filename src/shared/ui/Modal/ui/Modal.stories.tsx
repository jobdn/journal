import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./Modal";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

export default {
  title: "shared/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const ModalTemplate: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const DarkModal = ModalTemplate.bind({});
DarkModal.args = {
  children:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus tenetur culpa necessitatibus praesentium officia perspiciatis, eligendi est dolore iure voluptates optio officiis unde enim voluptas, provident nostrum suscipit alias!",
  isOpen: true,
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = ModalTemplate.bind({});
Light.args = {
  children:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus tenetur culpa necessitatibus praesentium officia perspiciatis, eligendi est dolore iure voluptates optio officiis unde enim voluptas, provident nostrum suscipit alias!",
  isOpen: true,
};
