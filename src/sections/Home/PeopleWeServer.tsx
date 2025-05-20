import {
  Accordion,
  Anchor,
  Box,
  BoxProps,
  Paper,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";
import { FGDs } from "../../data/FGDs";
import { informationSharingSessisos } from "../../data/informationSharingSessisos";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const PeopleWeServe = ({ boxProps, subtitleProps, titleProps }: IProps) => {
  return (
    <Box {...boxProps} id="peopleWeServe">
      <Box mb="lg">
        <TitleBadge title="VOICES FROM THE PEOPLE WE SERVE" />
        <Title {...titleProps}>Community Reflections and Dialogue</Title>
        <Text {...subtitleProps}>
          Firsthand perspectives shared through focus group discussions and
          community information sessions.
        </Text>
      </Box>
      <SimpleGrid cols={1} spacing="lg">
        <Accordion variant="separated" radius="md">
          <Accordion.Item value="fgd">
            <Accordion.Control>Focus Group Discussions</Accordion.Control>
            <Accordion.Panel>
              {FGDs.map((doc) => (
                <Anchor
                  key={doc.title}
                  href={doc.link}
                  target="_blank"
                  display="block"
                  mb={4}
                  weight={600}
                  color="blue"
                >
                  📄 {doc.title}
                </Anchor>
              ))}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="iss">
            <Accordion.Control>Information Sharing Sessions</Accordion.Control>
            <Accordion.Panel>
              <Accordion variant="contained" radius="sm">
                {informationSharingSessisos.map((session) => (
                  <Accordion.Item value={session.title} key={session.title}>
                    <Accordion.Control>{session.title}</Accordion.Control>
                    <Accordion.Panel>
                      <Anchor
                        href={session.pdfLink}
                        target="_blank"
                        size="sm"
                        mb={6}
                        style={{
                          display: "inline-block",
                          fontWeight: 600,
                          color: "#1a73e8",
                        }}
                      >
                        📄 View PDF Document
                      </Anchor>
                      <Paper mt="xs" shadow="xs" radius="md" p="xs" withBorder>
                        <Box
                          style={{ position: "relative", paddingTop: "56.25%" }}
                        >
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
                      </Paper>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </SimpleGrid>
    </Box>
  );
};

export default PeopleWeServe;
