import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Image,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";

const useStyles = createStyles((theme) => ({
  feature: {
    padding: theme.spacing.lg,
    backdropFilter: `blur(16px) saturate(180%)`,
    backgroundColor: `rgba(255, 255, 255, 0.75)`,
    border: `1px solid rgba(209, 213, 219, 0.3)`,
  },
}));

interface FeatureProps extends PaperProps {
  image: string;
  title: string;
  description: string;
  action: string;
}

const mockdata = [
  {
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Protection Coordination",
    description:
      "We work with partners to coordinate protection activities across sectors, ensuring a principled and efficient humanitarian response.",
    action: ` Learn more about coordination mechanisms`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Field Protection Monitoring",
    description: `Our teams monitor risks and incidents on the ground, gathering vital data to shape response efforts and advocacy strategies.`,
    action: "Explore monitoring reports",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Advocacy & Policy",
    description: `We advocate for the rights of crisis-affected populations and engage with local and global actors to improve protection outcomes.`,
    action: "Read our latest advocacy briefs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Partnerships & Capacity Building",
    description: `We support national actors, civil society, and humanitarian organizations through training, tools, and technical guidance.`,
    action: "Find out how we build local capacity ",
  },
];

function Feature({ image, title, description, action }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.feature, "card")} shadow="md" radius="sm">
      <Card.Section>
        <Image src={image} height={240} fit="cover" />
      </Card.Section>
      <Stack spacing="sm" mt="md">
        <Title order={4}>{title}</Title>
        <Text size="sm">{description}</Text>
        <Button variant="subtle" color="secondary">
          {action}
        </Button>
      </Stack>
    </Card>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const FeaturesSection = ({ boxProps, subtitleProps }: IProps) => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="what to expect" />
        <Text {...subtitleProps}>
          What We Do to Strengthen Protection in Humanitarian Crises
        </Text>
      </Box>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[{ maxWidth: "md", cols: 2, spacing: "sm" }]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
