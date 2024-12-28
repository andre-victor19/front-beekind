import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { usePortal } from "../../../hooks/usePortal";

const Card = React.lazy(() => import("../../../components/Card"));

const Differences = () => {
  const { data } = usePortal();
  return (
    <section test-id="diferencias">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
          <Typography
            textAlign="center"
            sx={{
              fontSize: "36px",
              fontFamily: "DupletRounded-Light",
              lineHeight: "normal",
            }}
          >
            O que nos torna{" "}
            <span
              style={{
                fontFamily: "DupletRounded-Semibold",
                background: "linear-gradient(90deg, #FFB300, #FF4400)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              especiais
            </span>
          </Typography>

          <Stack direction="row" columnGap={2} rowGap={3} flexWrap="wrap">
            {data.differences.map((diff, index) => (
              <Suspense
                fallback={<div>Carregando...</div>}
                key={index.toString()}
              >
                <Card
                  image={diff.image}
                  title={diff.title}
                  description={diff.description}
                />
              </Suspense>
            ))}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default Differences;
