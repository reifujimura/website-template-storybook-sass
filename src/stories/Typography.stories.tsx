import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const Typography = ({
  variant,
}: {
  variant: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number;
}): JSX.Element => <div className={`Typography-${variant}`}></div>;

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <>
    <h1>h1.Title</h1>
    <h2>h2.Title</h2>
    <h3>h3.Title</h3>
    <h4>h4.Title</h4>
    <h5>h5.Title</h5>
    <h6>h6.Title</h6>
    <p>Paragraph</p>
  </>
);

export const Default = Template.bind({});

Default.args = {};
