import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { usePortal } from "../../../hooks/usePortal";

const CardFeedback = React.lazy(
  () => import("../../../components/CardFeedback")
);

const Feedbacks = () => {
  const { reviews } = usePortal();
  return (
    <section test-id="profissionais">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            Depoimentos
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Veja o que os papais e mamães estão falando sobre a nossa clínica
            integrativa pedriátrica em Campinas
          </Typography>

          {reviews?.map((review, index) => (
            <Suspense
              key={index.toString()}
              fallback={<div>Carregando...</div>}
            >
              <CardFeedback
                description={review.text}
                rating={review.rating}
                title={review.author_name}
                image={review.profile_photo_url}
                timeDescription={review.relative_time_description}
              />
            </Suspense>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Feedbacks;
