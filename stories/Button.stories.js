import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "error", "success"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "normal", "lg"],
      control: { type: "radio" },
    },
  },
};

const temp = (args) => <Button {...args} />;

export const Primary = temp.bind({});
Primary.args = {
  type: "primary",
  children: "Primary",
  size: "sm",
};

export const Secondary = temp.bind({});
Secondary.args = {
  type: "secondary",
  children: "Secondary",
  size: "lg",
};

export const Error = temp.bind({});
Error.args = {
  type: "warning",
  children: "Error",
  size: "normal",
};

export const Success = temp.bind({});
Success.args = {
  type: "success",
  children: "Success",
  size: "sm",
};
