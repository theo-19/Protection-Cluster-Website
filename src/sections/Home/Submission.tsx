import {
  Anchor,
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
import {
  IconBook,
  IconCertificate,
  IconPhoneCalling,
  IconPhoto,
} from "@tabler/icons-react";
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
}

function Submission({
  logo,
  title,
  website,
  reports,
  trainings,
  communication,
  summary,
}: SubmissionProps) {
  const { classes } = useStyles();

  const onReportClick = useCallback(
    (variant: any) => window.open(variant, "_blank"),
    []
  );
  return (
    <Card className={classes.submission} shadow="sm" radius="md" p="md">
      <Group position="apart" spacing="md" mb="sm">
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
      <Divider my="xs" />
      <SimpleGrid cols={2} spacing="xs">
        <Button
          leftIcon={<IconBook size={14} />}
          size="xs"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(reports)}
        >
          Reports
        </Button>
        <Button
          leftIcon={<IconCertificate size={14} />}
          size="xs"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(trainings)}
        >
          Trainings
        </Button>
        <Button
          leftIcon={<IconPhoneCalling size={14} />}
          size="xs"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(communication)}
        >
          Communication
        </Button>
        <Button
          leftIcon={<IconPhoto size={14} />}
          size="xs"
          variant="outline"
          color="dark"
          onClick={() => onReportClick(summary)}
        >
          Summary
        </Button>
      </SimpleGrid>
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
    <Box {...boxProps} id="submissions">
      <Box mb="lg">
        <TitleBadge title="Voices from Our Partners" />
        <Title {...titleProps}> Our Partners Submissions</Title>
        <Text {...subtitleProps}>
          Explore best protection practices directly from our field partners.
          Access their reports, training materials, communication pieces, and
          field pictures.
        </Text>
      </Box>
      <Group position="apart" mb="xl">
        <Group spacing={4}>
          <Input
            onChange={onSearch}
            value={searchValue}
            placeholder="Search by organization"
            size="sm"
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
}));
