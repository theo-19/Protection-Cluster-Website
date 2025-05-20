import { Box, BoxProps, Container, TextProps, TitleProps } from "@mantine/core";
import { Helmet } from "react-helmet";
import HeroSection from "../sections/Home/Hero.tsx";
import PeopleWeServe from "../sections/Home/PeopleWeServer.tsx";
import SubmissionsSection from "../sections/Home/Submission.tsx";
import SupportingPartners from "../sections/Home/SupportingParnters.tsx";

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
          <Box {...boxProps}>
            <SubmissionsSection
              boxProps={boxProps}
              titleProps={titleProps}
              subtitleProps={subTitleProps}
            />
          </Box>
          <PeopleWeServe
            boxProps={boxProps}
            titleProps={titleProps}
            subtitleProps={subTitleProps}
          />
        </Container>

        <Container>
          <SupportingPartners boxProps={boxProps} />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
