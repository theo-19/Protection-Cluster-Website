import {
  Anchor,
  Badge,
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Divider,
  Group,
  Image,
  Input,
  PaperProps,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { useCallback, useState } from "react";
import TitleBadge from "../../components/TitleBadge";
import { submissions } from "../../data/submissions";

interface SubmissionProps extends PaperProps {
  logo: string;
  title: string;
  website: string;
  reports?: string;
  trainings?: string;
  communication?: string;
  summary?: string;
  tag?: string;
}

function Submission({
  logo,
  title,
  website,
  reports,
  trainings,
  communication,
  summary,
  tag,
}: SubmissionProps) {
  const { classes } = useStyles();

  const onReportClick = useCallback(
    (variant: any) => window.open(variant, "_blank"),
    []
  );
  return (
    <Card className={classes.submission} shadow="sm" radius="md" p="md">
      <Group position="apart" spacing="md" mb="sm" align="flex-start">
        <Group
          spacing="sm"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            width={88}
            height={88}
            fit="contain"
            alt="Logo"
            radius="sm"
          />
          <div>
            <Title order={5}>{title}</Title>
            <Text size="xs">
              <Anchor href={website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </Anchor>
            </Text>
          </div>
        </Group>
      </Group>
      <Badge
        color="orange"
        variant="filled"
        size="sm"
        style={{ marginTop: 4, height: "auto" }}
      >
        {tag}
      </Badge>
      <Divider my="xs" />

      <Button
        leftIcon={<IconPhoto size={14} />}
        size="sm"
        variant="filled"
        color="blue"
        fullWidth
        mb="xs"
        style={{
          fontWeight: 600,
          letterSpacing: 0.2,
        }}
        onClick={() => onReportClick(summary)}
      >
        Summary
      </Button>

      <Group grow spacing="xs" mt="xs">
        <Button
          size="sm"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(reports)}
          style={{ fontWeight: 500, fontSize: 12 }}
        >
          Reports
        </Button>
        <Button
          size="sm"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(trainings)}
          style={{ fontWeight: 500, fontSize: 12 }}
        >
          Trainings
        </Button>
      </Group>
      <Button
        size="sm"
        variant="outline"
        color="dark"
        fullWidth
        mb="xs"
        style={{
          fontWeight: 500,
          fontSize: 12,
          marginTop: 8,
        }}
        onClick={() => onReportClick(communication)}
      >
        Communications
      </Button>
    </Card>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const SubmissionsSection = ({
  boxProps,
  titleProps,
  subtitleProps,
}: IProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredPartners, setFilteredPartners] = useState(submissions);
  const { classes } = useStyles();
  const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    setFilteredPartners(
      submissions.filter((partner) =>
        partner.title.toLowerCase().includes(value)
      )
    );
  }, []);
  const items = filteredPartners.map((item) => (
    <Submission {...item} key={item.title} />
  ));
  return (
    <Box {...boxProps} id="submissions" style={{ marginBottom: "1.5rem" }}>
      <Box mb="lg">
        <TitleBadge color="blue" title="Best Field Practices" />
        <Title {...titleProps}> Our Partners Submissions</Title>
        <Text {...subtitleProps}>
          Explore best protection practices directly from our field partners.
          Access their reports, training materials, communication pieces, and
          field pictures.
        </Text>
      </Box>
      <Group position="apart" mb="xl">
        <Group spacing={4} className={classes.searchContainer}>
          <Input
            onChange={onSearch}
            value={searchValue}
            placeholder="Search by organization"
            size="sm"
            width={"100%"}
            className={classes.searchContainer}
          />
        </Group>
      </Group>

      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default SubmissionsSection;

const useStyles = createStyles((theme) => ({
  submission: {
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
  },
  searchContainer: { width: "100% !important" },
}));
