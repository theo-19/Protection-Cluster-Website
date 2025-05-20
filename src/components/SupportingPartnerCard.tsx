import { Anchor, Card, Flex, Image, Stack, Text } from "@mantine/core";

interface IProps {
  data: {
    name: string;
    logo: string;
    website: string;
    role?: string;
  };
}

const SupportingPartnerCard = ({ data }: IProps) => {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Flex align="center" gap="lg">
        <Image
          src={data.logo}
          alt={`${data.name} logo`}
          width={100}
          height={100}
          fit="contain"
          style={{
            objectFit: "contain",
            borderRadius: 8,
            backgroundColor: "#f9f9f9",
          }}
        />
        <Stack spacing={4}>
          <Text weight={600} size="md">
            {data.name}
          </Text>
          {data.role && (
            <Text size="sm" color="dimmed">
              {data.role}
            </Text>
          )}
          <Anchor href={data.website} target="_blank" size="sm">
            🌐 Visit Website
          </Anchor>
        </Stack>
      </Flex>
    </Card>
  );
};

export default SupportingPartnerCard;
