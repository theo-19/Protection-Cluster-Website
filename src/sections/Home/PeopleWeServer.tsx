import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Divider,
  Input,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
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
  },
}));

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const PeopleWeServe = ({ boxProps, subtitleProps, titleProps }: IProps) => {
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
        <TitleBadge title="VOICES FROM THE PEOPLE WE SERVE" />
        <Title {...titleProps}>Community Reflections and Dialogue</Title>
        <Text {...subtitleProps}>
          Firsthand perspectives shared through focus group discussions and
          community information sessions.
        </Text>
      </Box>
      <Input
        placeholder="Search by title"
        size="sm"
        mb="lg"
        value={searchValue}
        onChange={handleSearch}
      />

      <Box mb="xl">
        <Title order={4} mb="sm">
          Focus Group Discussions
        </Title>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {filteredFGDs.map((doc) => (
            <Card
              className={classes.card}
              key={doc.title}
              shadow="sm"
              radius="md"
              p="md"
            >
              <Title order={5} mb="xs">
                {doc.title}
              </Title>
              <Divider my="xs" />
              <Button
                fullWidth
                size="xs"
                leftIcon={<IconBook size={14} />}
                variant="light"
                onClick={() => window.open(doc.link, "_blank")}
              >
                View Document
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Title order={4} mb="sm">
          Information Sharing Sessions
        </Title>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {filteredISS.map((session) => (
            <Card
              className={classes.card}
              key={session.title}
              shadow="sm"
              radius="md"
              p="md"
            >
              <Title order={5} mb="xs">
                {session.title}
              </Title>
              <Divider my="xs" />
              <Button
                fullWidth
                size="xs"
                leftIcon={<IconBook size={14} />}
                variant="light"
                onClick={() => window.open(session.pdfLink, "_blank")}
                mb="xs"
              >
                View PDF
              </Button>
              <Box style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src={session.videoLink}
                  title={`${session.title} Video`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PeopleWeServe;
