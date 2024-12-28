import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type CardFeedbackProps = {
  title: string;
  rating: number;
  image: string;
  description: string;
  timeDescription: string;
};

const CardFeedback = ({
  title,
  rating,
  image,
  description,
  timeDescription,
}: CardFeedbackProps) => {
  return (
    <Stack
      borderRadius="8px"
      sx={{
        position: "relative", // Para permitir a criação de uma pseudo-div para a borda
        px: 2,
        py: 2,
        bgcolor: "#FFF", // Fundo branco do conteúdo
        zIndex: 1, // Mantém o conteúdo acima da borda
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit", // Herda o mesmo borderRadius
          padding: "2px", // Largura da borda
          background:
            "linear-gradient(90deg, #FEB336 0%, #FF4956 20%, #D95B9A 40%, #946DE2 60%, #4584F9 80%, #24289E 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1, // Coloca a borda atrás do conteúdo
        },
      }}
      rowGap={2}
    >
      <Stack direction="row" columnGap={2}>
        <Avatar src={image} sx={{ bgcolor: "#FCB818" }}>
          B
        </Avatar>
        <Stack>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            {title}
          </Typography>
          <Stack direction="row" columnGap={1} alignItems="center">
            <Rating name="read-only" value={rating} readOnly size="small" />
            <Typography fontSize="10px" color="#000" sx={{ opacity: "50%" }}>
              {timeDescription}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography sx={{ fontSize: "14px", lineHeight: "24px" }}>
        {description}
      </Typography>
    </Stack>
  );
};

export default CardFeedback;
