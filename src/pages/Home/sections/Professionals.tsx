import React, { Suspense, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { usePortal } from "../../../hooks/usePortal";

const CardProfissional = React.lazy(
  () => import("../../../components/CardProfissional")
);

const Professionals = () => {
  const { isMobile, data } = usePortal();
  const navigate = useNavigate();

  const viewportWidth = useMemo(() => {
    return window.innerWidth - 50 + "px";
  }, [window.innerWidth]);

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
            Profissionais
          </Typography>
          <Container
            maxWidth={isMobile ? undefined : "lg"}
            sx={{
              padding: 0,
              overflow: "hidden",
              maxWidth: isMobile ? viewportWidth : undefined,
            }}
          >
            <Swiper
              //@ts-ignore
              autoplay={{
                delay: 5 * 1000,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={isMobile ? 1.5 : 3.5}
            >
              {data.professionals.map((professional, index) => (
                <SwiperSlide key={index.toString()}>
                  <Suspense fallback={<div>Carregando...</div>}>
                    <CardProfissional
                      description={professional.description}
                      image={professional.image}
                      title={professional.title}
                      onClick={() =>
                        navigate("/doctor", { state: professional })
                      }
                    />
                  </Suspense>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Stack>
      </Container>
    </section>
  );
};

export default Professionals;
