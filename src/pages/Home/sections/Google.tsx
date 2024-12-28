import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { usePortal } from "../../../hooks/usePortal";
import googleImage from "../../../assets/images/google.png";

const Google = () => {
  const { rating } = usePortal();
  return (
    <section test-id="google" style={{ backgroundColor: "#281F1C" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={1} alignItems="center">
          <Typography
            color="#FFF"
            sx={{
              fontSize: "40px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            {rating.toPrecision(2).replace(".", ",")}
          </Typography>
          <Rating name="read-only" value={rating} readOnly size="small" />
          <Typography color="#FFF" sx={{ fontSize: "14px" }}>
            Com base nas últimas avaliações
          </Typography>
          <img
            style={{
              objectFit: "cover",
              width: "100px",
              borderRadius: "8px",
            }}
            src={googleImage}
            loading="lazy"
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Google;
