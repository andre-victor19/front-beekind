import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type CardProfissionalProps = {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
};

const CardProfissional = ({
  image,
  title,
  description,
  onClick,
}: CardProfissionalProps) => {
  return (
    <Stack
      borderRadius={2}
      justifyContent="flex-end"
      width="220px"
      height="350px"
      sx={{
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack px={1} py={2} rowGap={2}>
        <Stack>
          <Typography
            color="primary"
            sx={{
              fontSize: "16px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            {title}
          </Typography>
          <Typography
            color="#FFF"
            sx={{
              fontSize: "14px",
              fontFamily: "DupletRounded-Light",
              lineHeight: "normal",
            }}
          >
            {description}
          </Typography>
        </Stack>
        <Button
          onClick={onClick}
          variant="contained"
          sx={{
            bgcolor: "#353535",
            color: "#FFF",
            borderRadius: "200000px",
            py: 0,
          }}
          endIcon={<i className="fi fi-rr-angle-small-right" />}
        >
          Conhecer profissional
        </Button>
      </Stack>
    </Stack>
  );
};

export default CardProfissional;
