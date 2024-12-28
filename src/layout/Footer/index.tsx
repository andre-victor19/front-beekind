import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <Stack flex={1} direction="row" bgcolor="#FFF">
      <Container test-id="footer" maxWidth="xl" sx={{ py: 4, width: "100%" }}>
        <Stack
          flex={1}
          direction="row"
          justifyContent="space-between"
          rowGap={3}
          flexWrap="wrap"
        >
          <Stack rowGap={2}>
            <Typography
              color="#2C2D39"
              sx={{
                fontSize: "14px",
                fontFamily: "DupletRounded-Semibold",
                lineHeight: "normal",
              }}
            >
              Sobre nós
            </Typography>
            <Typography
              color="#2C2D39"
              sx={{
                textDecoration: "underline",
                fontSize: "14px",
                fontFamily: "DupletRounded-Light",
                lineHeight: "normal",
                display: "flex",
              }}
            >
              <i className="fi fi-rr-marker" />
              &nbsp; Avenida Coronel Quirino, 1.693 - Cambuí, Campinas-SP
            </Typography>
            <Typography
              color="#2C2D39"
              sx={{
                textDecoration: "underline",
                fontSize: "14px",
                fontFamily: "DupletRounded-Light",
                lineHeight: "normal",
                display: "flex",
              }}
            >
              <i className="fi fi-brands-whatsapp" />
              &nbsp; (19) 99605-7491
            </Typography>
          </Stack>
          <Stack rowGap={2}>
            <Typography
              color="#2C2D39"
              sx={{
                fontSize: "14px",
                fontFamily: "DupletRounded-Semibold",
                lineHeight: "normal",
              }}
            >
              Agende sua consulta
            </Typography>
            <Typography
              color="#2C2D39"
              sx={{
                textDecoration: "underline",
                fontSize: "14px",
                fontFamily: "DupletRounded-Light",
                lineHeight: "normal",
              }}
            >
              Agendar consulta
            </Typography>
          </Stack>
          <Stack rowGap={2}>
            <Typography
              color="#2C2D39"
              sx={{
                fontSize: "14px",
                fontFamily: "DupletRounded-Semibold",
                lineHeight: "normal",
              }}
            >
              Institucional
            </Typography>
            <Typography
              color="#2C2D39"
              sx={{
                fontSize: "14px",
                fontFamily: "DupletRounded-Light",
                lineHeight: "normal",
              }}
            >
              CNPJ: 57.067.622/0001-54
            </Typography>
            <Typography
              color="#2C2D39"
              sx={{
                fontSize: "14px",
                fontFamily: "DupletRounded-Light",
                lineHeight: "normal",
              }}
            >
              Responsável técnico: Dra Júlia Leite | CROSP 142096
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
