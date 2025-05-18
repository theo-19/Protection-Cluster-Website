import { Anchor, Card, Flex, Image, Stack, Text } from "@mantine/core";

interface IProps {
  data: {
    name: string;
    logo: string;
    website: string;
    role?: string;
  };
}

export const CampaignCard = ({ data }: IProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex align="center" gap="md">
        <Image
          src={data.logo}
          alt={`${data.name} logo`}
          height={100}
          width={160}
          fit="contain"
          style={{
            maxHeight: "100px",
            maxWidth: "160px",
            objectFit: "contain",
          }}
        />
        <Stack spacing={6}>
          <Text weight={500} size="lg">
            {data.name}
          </Text>
          <Text size="sm" color="dimmed">
            {data.role}
          </Text>
          <Anchor href={data.website} target="_blank">
            Visit Website
          </Anchor>
        </Stack>
      </Flex>
    </Card>
  );
};

export default CampaignCard;
