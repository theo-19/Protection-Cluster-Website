import { Box, BoxProps, Container, Title, TitleProps } from "@mantine/core";
import TitleBadge from "../../components/TitleBadge";
import { DashboardsList } from "./Dashboards";
import { ReportsList } from "./Reports";
import SupportingPartnerLogos from "./SupportingParnters";

const Resources = (): JSX.Element => {
  const boxProps: BoxProps = {
    mt: 96,
    mb: 136,
    py: 48,
  };

  const titleProps: TitleProps = {
    size: 32,
    weight: 800,
    mb: "lg",
    transform: "capitalize",
    sx: { lineHeight: "40px" },
  };

  return (
    <Container>
      <Box {...boxProps} id="resources" style={{ marginBottom: "1.5rem" }}>
        <Box mb="lg">
          <TitleBadge color="red" title="Resources" />
          <Title {...titleProps}>
            Explore the resources developed by the PC and AORs, including
            guidance documents, reports, raining materials, data collection and
            protection monitoring tools!
          </Title>
        </Box>
        <DashboardsList />
        <ReportsList />
        <SupportingPartnerLogos boxProps={boxProps} titleProps={titleProps} />
      </Box>
    </Container>
  );
};

export default Resources;
