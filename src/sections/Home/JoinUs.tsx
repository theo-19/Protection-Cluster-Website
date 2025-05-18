import {
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  TextProps,
  ThemeIcon,
  TitleProps,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconUsers, IconWorld } from "@tabler/icons-react";
import { TitleBadge } from "../../components";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const JoinUsSection = ({ boxProps, subtitleProps }: IProps) => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box {...boxProps}>
      <Flex
        gap={{ base: "sm", sm: "lg" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <TitleBadge title="FIELD PARTNERSHIP – JOIN THE COLLECTIVE RESPONSE" />
          <Text {...subtitleProps}>Protection Is a Shared Responsibility</Text>
          <Flex gap="xs">
            <ThemeIcon size="xl" color="secondary" variant="filled">
              <IconWorld />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text weight={600}>Humanitarian Coordination</Text>
              <Text size="sm">
                Working side by side with national and international partners to
                deliver timely and effective protection services to those most
                in need.
              </Text>
            </Stack>
          </Flex>
          <Flex gap="xs">
            <ThemeIcon size="xl" color="secondary" variant="filled">
              <IconUsers />
            </ThemeIcon>
            <Stack spacing={2}>
              <Text weight={600}>Community Engagement</Text>
              <Text size="sm">
                Ensuring affected communities are at the center of response
                efforts through participatory planning, feedback mechanisms, and
                accountability.
              </Text>
            </Stack>
          </Flex>

          <Button>Explore Partnership Opportunities</Button>
        </Stack>
        <Box mx={matchesMobile ? 0 : "auto"}>
          <Image
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={matchesMobile ? "100%" : 500}
            height={400}
            radius="sm"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default JoinUsSection;
