import { MyLabel, type Props } from "../components/MyLabel";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<Props> = {
    title: "UI/lables/MyLabel",
    component: MyLabel,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: { control: "inline-radio" },
        allCaps: { control: "boolean" },
        color: { control: "select" },
        fontColor: { control: "color" },
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: "Basic label",
        size: "normal",
    },
};
export const AllCaps: Story = {
    args: {
        label: "All Caps Label",
        allCaps: true,
    },
};
export const Secondary: Story = {
    args: {
        label: "Secondary label",
        color: "text-secondary",
    },
};
export const CustomColor: Story = {
    args: {
        label: "Custom color label",
        fontColor: "blue",
    },
};

export const CustomBackgroundColor: Story = {
    args: {
        label: "Background color",
        size: "h1",
        fontColor: "white",
        backgroundColor: "black",
    },
};
