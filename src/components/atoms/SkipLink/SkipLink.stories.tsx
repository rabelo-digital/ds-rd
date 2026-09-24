import type { Meta, StoryObj } from "@storybook/react";

import { SkipLink } from "./SkipLink";

const meta: Meta<typeof SkipLink> = {
  title: "Atoms/SkipLink",
  component: SkipLink,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: (args) => (
    <>
      <SkipLink {...args} />
      <main id="main-content" style={{ padding: "2rem" }}>
        Conteúdo principal
      </main>
    </>
  )
};
