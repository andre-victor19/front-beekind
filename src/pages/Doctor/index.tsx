import React, { Suspense, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { usePortal } from "../../hooks/usePortal";
import starIcon from "../../assets/images/star.svg";
import Button from "@mui/material/Button";

const Google = React.lazy(() => import("../Home/sections/Google"));

const Doctor = () => {
  const theme = useTheme();
  const { state } = useLocation();
  const { data } = usePortal();

  const doctor = useMemo(() => {
    //@ts-ignore
    return data.doctors[state.id];
  }, [state.id]);

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
          <Stack direction="row" flex={1} justifyContent="center">
            <Stack
              borderRadius={2}
              justifyContent="flex-end"
              width="250px"
              height="350px"
              sx={{
                overflow: "hidden",
                backgroundImage: `url(${doctor.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Stack px={1} py={2} rowGap={2}>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: "24px",
                    fontFamily: "DupletRounded-Semibold",
                    lineHeight: "normal",
                    background: "linear-gradient(90deg, #FFB300, #FF4400)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  color="#FFF"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "normal",
                  }}
                >
                  {doctor.subtitle}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography fontSize="16px">{doctor.description}</Typography>
          <Stack direction="row" rowGap={1} columnGap={1} flexWrap="wrap">
            {doctor.tags.map((tag: any, index: number) => (
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
                label={tag}
              />
            ))}
          </Stack>
          <Container maxWidth="xs">
            <Button color="primary" variant="contained" fullWidth>
              Agendar consulta
            </Button>
          </Container>
        </Stack>
      </Container>

      <Suspense fallback={<div>Carregando...</div>}>
        <Google />
      </Suspense>
    </>
  );
};

export default Doctor;
