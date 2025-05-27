import { createStyles, Text, TextProps } from "@mantine/core";

interface IProps extends TextProps {
  title: string;
  color: "blue" | "red" | "orange" | "green" | "darkGray";
}

const colors = {
  red: "#ee2324",
  orange: "#fcb040",
  green: "#00a650",
  blue: "#00aeef",
  darkGray: "#232020",
};

const TitleBadge = ({ title, color }: IProps) => {
  const { classes } = useStyles();

  return (
    <Text
      style={{ backgroundColor: colors[color] }}
      className={classes.badge}
      mb="lg"
    >
      {title}
    </Text>
  );
};

export default TitleBadge;

const useStyles = createStyles((theme) => ({
  badge: {
    width: "fit-content",
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.xl,
    color: theme.white,
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: theme.fontSizes.sm,
    lineHeight: "14px",
  },
}));
