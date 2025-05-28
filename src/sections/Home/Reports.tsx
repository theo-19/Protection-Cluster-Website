import {
  Badge,
  Box,
  Button,
  Card,
  createStyles,
  Divider,
  Group,
  Pagination,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBook, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { TitleBadge } from "../../components";
import { reports } from "../../data/reports";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
    // minHeight: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: theme.shadows.xs,
    padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
  },
  title: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: theme.fontSizes.lg,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontSize: theme.fontSizes.sm,
    textAlign: "center",
    color: theme.colors.gray[7],
    marginBottom: theme.spacing.sm,
  },
  year: {
    marginBottom: theme.spacing.sm,
  },
  button: {
    width: "100%",
    fontWeight: 500,
    marginTop: theme.spacing.xs,
  },
}));

function filterBySearch(items: any, search: any, keys: any) {
  const term = search.toLowerCase();
  return items.filter((item: any) =>
    keys.some((key: any) => String(item[key]).toLowerCase().includes(term))
  );
}

function paginate(items: any, page: any, pageSize: any) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function ReportsList() {
  const { classes } = useStyles();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 6;
  const filtered = filterBySearch(reports, search, [
    "name",
    "category",
    "publishedYear",
  ]);
  const total = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = paginate(filtered, page, PAGE_SIZE);

  function handleSearchChange(e: any) {
    setSearch(e.currentTarget.value);
    setPage(1);
  }

  return (
    <Box style={{ marginTop: 120 }}>
      <TitleBadge color="green" title="Reports & Resources" />
      <TextInput
        mb="md"
        placeholder="Search reports..."
        icon={<IconSearch size={16} />}
        value={search}
        onChange={handleSearchChange}
      />
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {paginated.map((report: any, idx: any) => (
          <Card className={classes.card} key={report.link + idx}>
            <Group spacing="xs" mb="xs">
              <Badge color="blue" variant="light" size="sm">
                {report.logo}
              </Badge>
              <Badge color="teal" variant="light" size="sm">
                {report.category}
              </Badge>
              <Badge color="gray" variant="light" size="sm">
                {report.publishedYear}
              </Badge>
            </Group>
            <Title order={5} className={classes.title}>
              {report.name}
            </Title>
            {/* <Text className={classes.description}>{report.description}</Text> */}
            <Divider my="xs" />
            <Button
              leftIcon={<IconBook size={16} />}
              size="sm"
              variant="filled"
              color="blue"
              className={classes.button}
              component="a"
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Document
            </Button>
          </Card>
        ))}
      </SimpleGrid>
      {total > 1 && (
        <Group position="center" mt="lg">
          <Pagination value={page} onChange={setPage} total={total} />
        </Group>
      )}
    </Box>
  );
}
