import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-scroll";
import { BrandName } from "./index";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", link: "home" },
      { label: "Submissions", link: "submissions" },
      { label: "PeopleWeServe", link: "peopleWeServe" },
      { label: "Our Partners", link: "partners" },
      { label: "Resources", link: "resources" },
      { label: "Contact", link: "contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "contact@protectioncluster.org",
        link: "mailto:contact@protectioncluster.org",
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
      <div className={classes.wrapper} key={group.title}>
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
            <BrandName block="footer" size={40} />
            <Text size="sm">
              The Protection Cluster collaborates with humanitarian partners to
              protect the rights and well-being of people in crisis, ensuring
              access to safety, dignity, and essential services through
              coordination, advocacy, and field support.
            </Text>
          </Stack>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="lg">
        <Text size="sm">
          © {new Date().getFullYear()} Protection Cluster. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" component="a" href="#" target="_blank">
            <IconBrandGithub size="20" stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="#" target="_blank">
            <IconBrandTwitter size="20" stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="#" target="_blank">
            <IconBrandFacebook size="20" stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="#" target="_blank">
            <IconBrandInstagram size="20" stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="#" target="_blank">
            <IconBrandLinkedin size="20" stroke={2} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default LandingFooter;

const useStyles = createStyles((theme) => ({
  footer: {
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
