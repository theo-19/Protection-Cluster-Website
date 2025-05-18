import { Image, TitleProps, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import lightLogo from "../assets/img/light-logo.png";

interface IProps extends TitleProps {
  block: "header" | "footer";
}

const Brand = (props: IProps) => {
  const { block = "header" } = props;
  return (
    <UnstyledButton component={Link} to="/">
      <Image
        src={lightLogo}
        style={
          block === "header" ? { width: "45%", height: "auto" } : undefined
        }
      />
    </UnstyledButton>
  );
};

export default Brand;
