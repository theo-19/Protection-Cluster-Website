import { Image, TitleProps, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import lightLogo from "../assets/img/light-logo.png";

interface IProps extends TitleProps {
  block: "header" | "footer";
  compressed?: boolean;
}

const Brand = (props: IProps) => {
  const { block } = props;
  return (
    <UnstyledButton component={Link} to="/">
      <Image
        src={lightLogo}
        style={{ marginTop: 6 }}
        width={block === "header" ? "5rem" : "90%"}
      />
    </UnstyledButton>
  );
};

export default Brand;
