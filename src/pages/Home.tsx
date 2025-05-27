import { Box, BoxProps, Container, TextProps, TitleProps } from "@mantine/core";
import { Helmet } from "react-helmet";
import CoordinationImpactVideo from "../sections/Home/CoordinationImpactVideo.tsx";
import { DashboardsList } from "../sections/Home/Dashboards.tsx";
import HeroSection from "../sections/Home/Hero.tsx";
import PeopleWeServe from "../sections/Home/PeopleWeServer.tsx";
import { ReportsList } from "../sections/Home/Reports.tsx";
import SubmissionsSection from "../sections/Home/Submission.tsx";
import SupportingPartnerLogos from "../sections/Home/SupportingParnters.tsx";

const HomePage = (): JSX.Element => {
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

  const subTitleProps: TextProps = {
    size: 20,
    weight: 700,
    mb: "md",
    sx: { lineHeight: "28px" },
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box id="home">
        <HeroSection />
        <Container>
          <CoordinationImpactVideo
            videoUrl="https://www.youtube.com/embed/ZVlhADGE1s4"
            titleProps={titleProps}
            boxProps={boxProps}
          />
          <SupportingPartnerLogos boxProps={boxProps} titleProps={titleProps} />
        </Container>
        <Container>
          <Box {...boxProps}>
            <SubmissionsSection
              boxProps={boxProps}
              titleProps={titleProps}
              subtitleProps={subTitleProps}
            />
            <SupportingPartnerLogos
              boxProps={boxProps}
              titleProps={titleProps}
            />
          </Box>
          <PeopleWeServe
            boxProps={boxProps}
            titleProps={titleProps}
            subtitleProps={subTitleProps}
          />
          <SupportingPartnerLogos boxProps={boxProps} titleProps={titleProps} />
        </Container>

        <Container>
          <DashboardsList />
          <ReportsList />
          <SupportingPartnerLogos boxProps={boxProps} titleProps={titleProps} />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
