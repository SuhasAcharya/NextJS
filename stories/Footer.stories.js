import Footer from "../components/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    type: {
      options: ["secondary", "brown"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "normal", "lg"],
      control: { type: "select" },
    },
  },
};

const temp = (args) => <Footer {...args} />;

export const Secondary = temp.bind({});
Secondary.args = {
  type: "secondary",
  size: "normal",
  children: "Secondary",
};

export const Error = temp.bind({});
Error.args = {
  type: "error",
  size: "lg",
  children: "Error",
};
