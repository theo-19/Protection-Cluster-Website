import {
  Box,
  Burger,
  Button,
  ButtonProps,
  Container,
  createStyles,
  Drawer,
  Flex,
  Header,
  rem,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import lightLogo from "../assets/img/light-logo.png";
import NWS_CP_Logo from "../assets/img/NWS_CP_Logo.png";
import NWS_GBV_Logo from "../assets/img/NWS_GBV_Logo.png";
import NWS_HLP_Logo from "../assets/img/NWS_HLP_Logo.png";

import { BrandName } from "./index";

const HEADER_HEIGHT = 60;

const navLinks = [
  { to: "home", label: "Home" },
  { to: "submissions", label: "Best Field Practices" },
  { to: "peopleWeServe", label: "Voices from People We Serve" },
  { to: "resources", label: "Resources" },
  { to: "contact", label: "Contact" },
];

const LandingNavbar = () => {
  const { classes } = useStyles();
  const [stickyClass, setStickyClass] = useState(false);
  const matchesMobile = useMediaQuery("(max-width: 768px)");
  const [drawerOpened, { open, close }] = useDisclosure(false);

  const buttonProps: ButtonProps = {
    variant: "subtle",
    radius: matchesMobile ? "sm" : 0,
    fullWidth: matchesMobile,
    size: "md",
    style: { justifyContent: "flex-start" },
  };

  useEffect(() => {
    const stickNavbar = () => {
      setStickyClass(window.scrollY > 240);
    };
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 100,
        transition: "all 150ms ease",
        boxShadow: stickyClass ? "0 2px 12px rgba(0,0,0,0.07)" : undefined,
        background: "transparent",
      }}
    >
      <Header
        height={HEADER_HEIGHT}
        className={classes.header}
        style={{ marginLeft: 0, marginRight: 0 }}
      >
        <Container
          size="lg"
          fluid
          style={{
            height: "100%",
            width: "100%",
            marginInlineStart: 32,
            marginInlineEnd: 32,
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{ height: "100%" }}
          >
            <Flex className={classes.logosWrapper}>
              <BrandName block="header" src={lightLogo} />
              {!matchesMobile && (
                <>
                  <BrandName block="header" src={NWS_HLP_Logo} />
                  <BrandName block="header" src={NWS_GBV_Logo} />
                  <BrandName block="header" src={NWS_CP_Logo} />
                </>
              )}
            </Flex>

            <Flex align="center" gap="xs" className={classes.hiddenMobile}>
              {navLinks.map((item) => (
                <Button
                  key={item.to}
                  component={Link}
                  to={item.to}
                  smooth
                  duration={500}
                  className={classes.link}
                  {...buttonProps}
                  fullWidth={false}
                >
                  {item.label}
                </Button>
              ))}
            </Flex>

            <Burger
              opened={drawerOpened}
              onClick={open}
              className={classes.menuButton}
              size="md"
              aria-label="Open navigation"
            />
          </Flex>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        padding="md"
        size="80vw"
        title={<BrandName block="header" src={lightLogo} />}
        styles={{
          title: { paddingLeft: 0 },
        }}
      >
        <Flex direction="column" gap="sm">
          {navLinks.map((item) => (
            <Button
              key={item.to}
              component={Link}
              to={item.to}
              smooth
              duration={500}
              className={classes.link}
              {...buttonProps}
              onClick={close}
            >
              {item.label}
            </Button>
          ))}
        </Flex>
      </Drawer>
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
    transition: "color 0.15s",

    "&:hover": {
      textDecoration: "underline",
      fontWeight: 600,
    },
    [theme.fn.smallerThan("md")]: {
      height: rem(42),
      width: "100%",
      justifyContent: "flex-start",
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none !important",
    },
  },
  logosWrapper: {
    gap: theme.spacing.sm,
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      gap: 0,
    },
  },
  hiddenDesktop: {
    display: "none",
    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },
  header: {
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(4px)",
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.sm,
    transition: "all 150ms ease",
    height: rem(HEADER_HEIGHT),
    alignItems: "center",
    padding: `0 ${theme.spacing.lg}px`,
    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: `0 ${theme.spacing.md}px`,
    },
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
    marginLeft: theme.spacing.md,
  },
}));
