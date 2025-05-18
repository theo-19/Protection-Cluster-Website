import {
  Card,
  createStyles,
  getStylesRef,
  Image,
  PaperProps,
} from "@mantine/core";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ICampaign } from "../types";

interface IProps extends PaperProps {
  data: ICampaign;
  showActions?: boolean;
}

const CampaignCard = ({ data }: IProps) => {
  const { classes } = useStyles();
  const { mainImage, id } = data;

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = [
    {
      id,
      src: mainImage,
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1674574124976-a56d9052c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id,
      src: "https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    { id, src: "http://dummyimage.com/142x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/240x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/122x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/245x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/224x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/172x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/206x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/212x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/232x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/193x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/201x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/150x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/118x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/152x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/148x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/108x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/241x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/147x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/134x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/114x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/154x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/184x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/151x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/112x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/245x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/136x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/105x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/141x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/134x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/222x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/212x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/226x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/193x100.png/cc0000/ffffff" },
    { id, src: "http://dummyimage.com/166x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/194x100.png/5fa2dd/ffffff" },
    { id, src: "http://dummyimage.com/110x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/222x100.png/dddddd/000000" },
    { id, src: "http://dummyimage.com/165x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/116x100.png/ff4444/ffffff" },
    { id, src: "http://dummyimage.com/205x100.png/cc0000/ffffff" },
  ];

  return (
    <>
      <Card radius="sm" shadow="md" ml="xs" className={classes.card}>
        <Card.Section>
          <Image
            src={mainImage}
            height={280}
            className={classes.image}
            onClick={() => setLightboxOpen(true)}
            alt="Campaign preview"
          />
        </Card.Section>
      </Card>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        // plugins={[Thumbnails]}
      />
    </>
  );
};

export default CampaignCard;
const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    padding: theme.spacing.lg,
    backdropFilter: `blur(16px) saturate(180%)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : `rgba(255, 255, 255, 0.75)`,
    border: `2px solid rgba(209, 213, 219, 0.3)`,

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },

    "&:hover": {
      boxShadow: theme.shadows.xl,
      border: `2px solid ${theme.colors.primary[7]}`,
      backgroundColor: theme.colors.primary[0],
      transition: "all 150ms ease",
    },
  },

  image: {
    ref: getStylesRef("image"),
    transition: "transform 150ms ease",
    cursor: "pointer",
  },
}));
