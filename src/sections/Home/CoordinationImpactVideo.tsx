import {
  Box,
  BoxProps,
  Paper,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import TitleBadge from "../../components/TitleBadge";

interface IProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
  videoUrl: string;
}

const CoordinationImpactVideo = ({
  boxProps,
  titleProps,
  subtitleProps,
  videoUrl,
}: IProps) => {
  return (
    <Box
      {...boxProps}
      id="coordinationImpact"
      style={{ marginBottom: "1.5rem" }}
    >
      <Box mb="lg">
        <TitleBadge
          color="orange"
          title="HUMANITARIAN COORDINATION IN ACTION"
        />
        <Title {...titleProps}>
          Coordinating Protection Efforts in Northwest Syria
        </Title>
        <Text {...subtitleProps}>
          This infographic video summarizes how the Protection Cluster
          successfully coordinated over 115 organizations to address the urgent
          needs of communities across Northwest Syria.
        </Text>
      </Box>

      <Paper shadow="sm" radius="md" withBorder p="md">
        <Box style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={videoUrl}
            title="Protection Cluster Coordination in Northwest Syria"
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
    </Box>
  );
};

export default CoordinationImpactVideo;
