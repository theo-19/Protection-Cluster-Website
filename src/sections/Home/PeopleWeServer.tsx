import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Divider,
  Image,
  Input,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import { useCallback, useState } from "react";
import { TitleBadge } from "../../components";
import { FGDs } from "../../data/FGDs";
import { informationSharingSessisos } from "../../data/informationSharingSessisos";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: theme.shadows.xs,
    padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
  },
  logo: {
    width: "100%",
    objectFit: "contain",
    margin: "0 auto",
    borderRadius: theme.radius.sm,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
    background: "#f7f7f7",
    border: `1px solid ${theme.colors.gray[2]}`,
    display: "block",
  },

  title: {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: theme.spacing.xs,
    fontSize: theme.fontSizes.lg,
  },
  divider: {
    width: "80%",
    margin: "0 auto",
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  button: {
    width: "100%",
    marginTop: theme.spacing.xs,
    fontWeight: 500,
  },
  iframeWrapper: {
    width: "100%",
    position: "relative",
    paddingTop: "56.25%",
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.sm,
    overflow: "hidden",
    background: "#f2f2f2",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
}));

interface IProps {
  boxProps: BoxProps;
  titleProps?: any;
  subtitleProps?: any;
}

const PeopleWeServe = ({ boxProps, titleProps }: IProps) => {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  }, []);

  const filteredFGDs = FGDs.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  const filteredISS = informationSharingSessisos.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  return (
    <Box {...boxProps} id="peopleWeServe" style={{ marginBottom: "1.5rem" }}>
      <Box mb="lg">
        <TitleBadge color="red" title="VOICES FROM THE PEOPLE WE SERVE" />
        <Title {...titleProps}>Community Reflections and Dialogue</Title>
      </Box>
      <Input
        placeholder="Search by title"
        size="sm"
        mb="lg"
        value={searchValue}
        onChange={handleSearch}
      />

      <Box mb="xl">
        <TitleBadge color="green" title="Information Sharing Sessions" />
        <Title order={4} mb="sm">
          Firsthand perspectives on protection cluster response shared through
          focus group discussions.
        </Title>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {filteredFGDs.map((doc) => (
            <Card className={classes.card} key={doc.title}>
              <Image
                height={doc.title === "Volunteer teams" ? 100 : undefined}
                src={doc.logo}
                alt="Logo"
                withPlaceholder
                radius="sm"
                style={{
                  width: 120,
                  height: 108,
                  justifySelf: "center",
                }}
                imageProps={{ style: { objectFit: "contain", maxHeight: 100 } }}
              />
              <Title order={5} className={classes.title}>
                {doc.title}
              </Title>
              <Divider className={classes.divider} />
              <Button
                leftIcon={<IconBook size={16} />}
                size="sm"
                variant="filled"
                color="blue"
                className={classes.button}
                onClick={() => window.open(doc.link, "_blank")}
              >
                View Document
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <TitleBadge color="orange" title="Information Sharing Sessions" />
        <Title order={4} mb="sm">
          Thematic sessions led by Protection Cluster partners to improve
          coordination during the transition phase.
        </Title>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {filteredISS.map((session) => (
            <Card className={classes.card} key={session.title}>
              <Title order={5} className={classes.title} mb="md">
                {session.title}
              </Title>
              <Divider className={classes.divider} />
              <Button
                leftIcon={<IconBook size={16} />}
                size="sm"
                variant="filled"
                color="blue"
                className={classes.button}
                onClick={() => window.open(session.pdfLink, "_blank")}
                fullWidth
                mb={session.videoLink ? "xs" : 0}
              >
                View Document
              </Button>
              {session.videoLink && (
                <Button
                  leftIcon={<IconBook size={16} />}
                  size="sm"
                  variant="outline"
                  color="dark"
                  className={classes.button}
                  onClick={() => window.open(session.videoLink, "_blank")}
                  fullWidth
                >
                  View Session Recording
                </Button>
              )}
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PeopleWeServe;
