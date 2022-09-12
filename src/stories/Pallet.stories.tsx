import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./Pallet.scss";

const Pallet = ({
  variant,
}: {
  variant: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number;
}): JSX.Element => <div className={`pallet-${variant}`}></div>;

export default {
  title: "Components/Pallet",
  component: Pallet,
} as ComponentMeta<typeof Pallet>;

const Template: ComponentStory<typeof Pallet> = () => (
  <>
    {Array.from({ length: 9 }).map((_, i) => {
      const variant = (i + 1) * 100;
      return <Pallet key={variant} variant={variant} />;
    })}
  </>
);

export const Default = Template.bind({});

Default.args = {};
