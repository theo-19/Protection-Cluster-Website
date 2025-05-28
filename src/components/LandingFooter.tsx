import {
  Anchor,
  Container,
  createStyles,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import { Link } from "react-scroll";
import lightLogo from "../assets/img/light-logo.png";
import NWS_CP_Logo from "../assets/img/NWS_CP_Logo.png";
import NWS_GBV_Logo from "../assets/img/NWS_GBV_Logo.png";
import NWS_HLP_Logo from "../assets/img/NWS_HLP_Logo.png";
import { BrandName } from "./index";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", link: "home" },
      { label: "Best Field Practices", link: "submissions" },
      { label: "Voices From People We Serve", link: "peopleWeServe" },
      { label: "Resources", link: "resources" },
      { label: "Contact", link: "contact" },
    ],
  },
  {
    title: "Contact",

    links: [
      {
        label: "Türkiye Cross-border: Protection | ReliefWeb Response",
        link: `https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fresponse.reliefweb.int%2Fturkiye-cross-border%2Fprotection&data=05%7C02%7Cnael.alsaleh%40bahar.ngo%7Ccee525543941482a3e5e08dd986c3379%7C6646c24ffc4340798cff80f3890ed418%7C0%7C0%7C638834312717154526%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ZGPkaVfSh8J4sVDNelk%2B7G%2B7unOOfzxCt5CGHpp7BFE%3D&reserved=0`,
      },

      {
        label: `Protection Cluster
Lorena Nieto
NWS PC coordinator 
nieto@unhcr.org`,
        link: "mailto:nieto@unhcr.org",
      },

      {
        label: `Savser Talostan
NWS PC co-coordinator 
Savser.talostan@rescue.org`,
        link: "mailto:Savser.talostan@rescue.org",
      },

      {
        label: `Gaurab Pradhan
NWS PC IMO 
pradhang@unhcr.org`,
        link: "mailto:pradhang@unhcr.org",
      },

      {
        label: `GBV AoR
Ken Otieno
GBV AOR coordinator 
otieno@unfpa.org`,
        link: "mailto:otieno@unfpa.org",
      },

      {
        label: `Eilaf AlBakri
GBV AOR co-coordinator 
gvbaorcoc@ihsanrd.org`,
        link: "mailto:gvbaorcoc@ihsanrd.org",
      },

      {
        label: `Majd Sawan
GBV AoR Subnational Coordinator 
Msawan.gbvaor@ihsanrd.org`,
        link: "mailto:Msawan.gbvaor@ihsanrd.org",
      },

      {
        label: `HLP AOR
Skylar Kogelschatz
HLP AOR co-chair 
kogelschatz@nrc.no`,
        link: "mailto:kogelschatz@nrc.no",
      },

      {
        label: `CP AoR
Carmen Girones Monclus
CP AOR Coordinator 
cmonclusgirones@unicef.org`,
        link: "mailto:cmonclusgirones@unicef.org",
      },

      {
        label: `Zahir Ozcan
CP AoR Co-coordinator 
Zahir_ozcan@wvi.org`,
        link: "mailto:Zahir_ozcan@wvi.org",
      },
    ],
  },
];

const LandingFooter = () => {
  const { classes } = useStyles();

  const groups = footerLinks.map((group) => {
    const links = group.links.map((link, index) =>
      link.link.startsWith("mailto") ? (
        <Text<"a">
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
        >
          {link.label}
        </Text>
      ) : (
        <Text
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
          smooth
          duration={500}
        >
          {link.label}
        </Text>
      )
    );

    return (
      <div className={classes.wrapper} key={group.title} id="contact">
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="lg">
        <div className={classes.logo} style={{ maxWidth: 250 }}>
          <Stack align="flex-start">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BrandName block="footer" src={lightLogo} />
              <BrandName block="footer" src={NWS_HLP_Logo} />
              <BrandName block="footer" src={NWS_GBV_Logo} />
              <BrandName block="footer" src={NWS_CP_Logo} />
            </div>
          </Stack>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="lg">
        <Text size="sm">
          © {new Date().getFullYear()} Designed and developed by{" "}
          <Anchor
            href="https://bahar.ngo/"
            target="_blank"
            rel="noopener noreferrer"
            underline
            style={{ fontWeight: 600, color: "orange" }}
          >
            BAHAR NGO
          </Anchor>{" "}
          on behalf of NWS Protection Cluster.
        </Text>
      </Container>
    </footer>
  );
};

export default LandingFooter;

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "40%",
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "85%",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("md")]: {
      marginLeft: 12,
    },

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      width: "92vw",
      marginTop: theme.spacing.sm,
    },
  },

  wrapper: {
    width: rem(200),

    [theme.fn.smallerThan("md")]: {
      margin: `${theme.spacing.sm} 0`,
    },

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  link: {
    display: "block",
    cursor: "pointer",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));
