import { Image, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

interface IProps {
  block: "header" | "footer";
  compressed?: boolean;
  src: string;
  alt?: string;
}

const BrandName = (props: IProps) => {
  const { block, src, alt } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const headerLogoSize = isMobile
    ? { width: 38, height: 24 }
    : { width: 88, height: 52 };

  const footerLogoSize = { width: 180, height: 88 };

  const size = block === "header" ? headerLogoSize : footerLogoSize;

  return (
    <UnstyledButton
      component={Link}
      to="/"
      sx={{
        marginInlineEnd: block === "footer" ? 0 : 12,
        padding: 0,
        borderRadius: 4,
        "&:focus": { outline: "none" },
        background: "transparent",
      }}
    >
      <Image
        src={src}
        alt={alt || "logo"}
        width={size.width}
        height={size.height}
        fit="contain"
        sx={{
          display: "block",
          maxWidth: size.width,
          maxHeight: size.height,
          objectFit: "contain",
        }}
      />
    </UnstyledButton>
  );
};

export default BrandName;
