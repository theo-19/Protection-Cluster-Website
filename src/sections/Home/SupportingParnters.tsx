import {
  Box,
  BoxProps,
  SimpleGrid,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import SupportingPartnerCard from "../../components/SupportingPartnerCard";
import { supportingPartners } from "../../data/SupportingPartners";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const SupportingPartners = ({ boxProps, titleProps }: IProps) => {
  return (
    <Box {...boxProps} id="partners">
      <Title {...titleProps} align="center" mb="md">
        Our Supporting Partners
      </Title>
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {supportingPartners.map((partner) => (
          <SupportingPartnerCard data={partner} key={partner.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SupportingPartners;
