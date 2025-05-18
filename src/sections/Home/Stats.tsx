import {
  Box,
  BoxProps,
  Paper,
  PaperProps,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";

const mockData = [
  {
    amount: "45M",
    description:
      "Individuals supported through coordinated protection responses worldwide.",
  },
  {
    amount: "30",
    description:
      "Active Protection Clusters and sub-clusters operating in crises globally.",
  },
  {
    amount: "5K",
    description:
      "Local and international actors working together under the cluster framework.",
  },
];

interface IStatsProps extends PaperProps {
  amount: string;
  description: string;
}

function Stats({ amount, description }: IStatsProps) {
  return (
    <Paper
      p="md"
      shadow="md"
      radius="sm"
      sx={{
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`,
      }}
    >
      <Title size={36} mb="md">
        {amount}+
      </Title>
      <Text size="sm">{description}</Text>
    </Paper>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const StatsSection = ({ boxProps, subtitleProps, titleProps }: IProps) => {
  const items = mockData.map((item) => (
    <Stats {...item} key={item.description} />
  ));

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="COORDINATING FOR PROTECTION" />
        <Title {...titleProps}>Global Reach, Local Impact</Title>
        <Text {...subtitleProps}>
          Working together with humanitarian partners to protect the lives and
          dignity of millions affected by conflict and disaster.
        </Text>
      </Box>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
