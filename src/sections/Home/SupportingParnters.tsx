import { Box, BoxProps, Group, Image, Title, TitleProps } from "@mantine/core";
import { supportingPartnersData } from "../../data/supportingPartnersData";

interface IProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
}

const SupportingPartnerLogos = ({ boxProps, titleProps }: IProps) => {
  return (
    <Box {...boxProps} id="partnerLogos">
      <Title
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        {...titleProps}
      >
        Website Supported By
      </Title>
      <Group position="center" spacing="xl">
        {supportingPartnersData.map((partner) => (
          <Image
            key={partner.id}
            src={partner.logo}
            alt={partner.name}
            width={100}
            height={100}
            fit="contain"
          />
        ))}
      </Group>
    </Box>
  );
};

export default SupportingPartnerLogos;
