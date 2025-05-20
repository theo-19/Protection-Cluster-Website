import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  createStyles,
  Flex,
  getStylesRef,
  Header,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BrandName } from "./index";

interface IProps extends BoxProps {
  compressed?: boolean;
}

const LandingNavbar = ({ compressed }: IProps) => {
  const { classes, theme } = useStyles();
  const [stickyClass, setStickyClass] = useState(false);
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  const buttonProps: ButtonProps = {
    variant: "subtle",
    radius: matchesMobile ? "sm" : 0,
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 240 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <Box
      mt={compressed ? (stickyClass ? 0 : "xl") : 0}
      sx={{
        transition: "all ease 150ms",
        position: "fixed",
        top: "3%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        margin: "auto",
        width: compressed ? (stickyClass ? "100%" : "85%") : "100%",
        boxShadow: theme.shadows.sm,
      }}
    >
      <Header
        height={60}
        px="md"
        sx={{
          backgroundColor: stickyClass
            ? "rgba( 255, 255, 255, .9 )"
            : theme.white,
          backdropFilter: "blur(4px)",
          borderRadius: stickyClass ? 0 : theme.radius.sm,
        }}
      >
        <Container size="lg" fluid={compressed} sx={{ height: "100%" }}>
          <Flex justify="space-between" align="center" sx={{ height: "100%" }}>
            <BrandName size={28} block="header" />
            <Flex
              align="center"
              gap="xs"
              sx={{ height: "100%" }}
              className={classes.hiddenMobile}
            >
              <Button
                component={Link}
                to="home"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="submissions"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                Submissions
              </Button>
              <Button
                component={Link}
                to="peopleWeServe"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                People We Serve
              </Button>
              <Button
                component={Link}
                to="partners"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                Our Partners
              </Button>
              <Button
                component={Link}
                to="resources"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                Resources
              </Button>
              <Button
                component={Link}
                to="contact"
                smooth
                duration={500}
                className={classes.link}
                {...buttonProps}
              >
                Contact
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Header>
    </Box>
  );
};

export default LandingNavbar;

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("md")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    "&:hover": {
      textDecoration: "underline",
      fontWeight: 600,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.black : theme.white,
      },
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));
