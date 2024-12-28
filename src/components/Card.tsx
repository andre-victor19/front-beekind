import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { usePortal } from "../hooks/usePortal";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

const Card = ({ image, description, title }: CardProps) => {
  const { isMobile } = usePortal();
  return (
    <Stack borderRadius="16px" sx={{ px: 2, py: 3 }} rowGap={2} bgcolor="#FFF">
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "8px",
        }}
        src={image}
        loading="lazy"
      />
      <Typography
        sx={{
          fontSize: "22px",
          fontFamily: "DupletRounded-Semibold",
          lineHeight: "normal",
          background: "linear-gradient(90deg, #FFB300, #FF4400)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: "16px", maxWidth: isMobile ? undefined : "22vw" }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default Card;
