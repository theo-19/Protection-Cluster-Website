import { Carousel } from "@mantine/carousel";
import { Box, BoxProps, TextProps, Title, TitleProps } from "@mantine/core";
import { TestimonialsCard } from "../../components";
import partnersData from "../../data/Testimonials.json";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const TestimonialsSection = ({ boxProps, titleProps }: IProps) => {
  const slides = partnersData.data.map((partner) => (
    <Carousel.Slide key={partner.id}>
      <TestimonialsCard data={partner} />
    </Carousel.Slide>
  ));

  return (
    <Box {...boxProps}>
      <Title {...titleProps} align="center">
        Our Partners
      </Title>
      <Carousel slideSize="95%" align="center" slideGap="lg">
        {slides}
      </Carousel>
    </Box>
  );
};

export default TestimonialsSection;
