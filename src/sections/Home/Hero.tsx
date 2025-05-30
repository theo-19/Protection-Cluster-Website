import {
  Container,
  createStyles,
  Overlay,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Container>
          <Stack spacing="xl">
            <Title className={classes.title}>
              Protecting communities{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: "#ee2324",
                  to: "#fcb040",
                }}
              >
                strengthening the resilience
              </Text>{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: "#00aeef",
                  to: "#00a650",
                }}
              >
                of those most at risk
              </Text>
            </Title>
            <Text size="lg" className={classes.description}>
              Discover our best practices in protection coordination through our
              partners, networks, and the people we serve, between 2023 and
              2025.
            </Text>
          </Stack>
        </Container>

        {/* <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            component={Link}
            to="/create-campaign"
            color="red"
          >
            View Field Activities
          </Button>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            component={Link}
            to="/campaigns"
            color="blue"
          >
            Browse Reports & Tools
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(https://i.imgur.com/8Y9y4JV.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: rem(640),

    [theme.fn.smallerThan("md")]: {
      height: rem(560),
    },

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    height: rem(640),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.smallerThan("md")]: {
      height: rem(560),
    },
  },

  title: {
    fontWeight: 900,
    fontSize: rem(64),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(48),
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "left",
      fontWeight: 700,
      padding: 0,
    },
  },

  highlight: {
    color: theme.colors.gray[4],
  },

  description: {
    color: theme.white,
    fontSize: rem(24),
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },

  badge: {
    width: "fit-content",
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    backgroundImage: theme.fn.gradient({
      from: theme.colors.green[2],
      to: theme.colors.lime[6],
      deg: 20,
    }),
    fontWeight: 500,
  },
}));
