import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import starIcon from "../../../assets/images/star.svg";
import { usePortal } from "../../../hooks/usePortal";

const Specialties = () => {
  const theme = useTheme();
  const { data } = usePortal();

  return (
    <section test-id="especialidades">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            Especialidades
          </Typography>
          <Stack direction="row" rowGap={1} columnGap={1} flexWrap="wrap">
            {data.specialites.map((specility, index) => (
              <Chip
                sx={{ bgcolor: "#FFF", color: theme.palette.secondary.main }}
                key={index.toString()}
                avatar={
                  <Avatar
                    sx={{ bgcolor: "transparent" }}
                    style={{ width: "15px", height: "15px" }}
                    src={starIcon}
                  />
                }
                label={specility}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default Specialties;
