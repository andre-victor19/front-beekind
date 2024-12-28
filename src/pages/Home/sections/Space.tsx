import { useMemo } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { usePortal } from "../../../hooks/usePortal";

const Space = () => {
  const { isMobile, data } = usePortal();

  const viewportWidth = useMemo(() => {
    return window.innerWidth - 70 + "px";
  }, [window.innerWidth]);

  return (
    <section test-id="espaco">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
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
              pagination
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={isMobile ? 1 : 3.5}
            >
              {data.spaces.map((space, index) => (
                <SwiperSlide key={index.toString()}>
                  <Box
                    sx={{
                      justifyContent: "flex-start",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        maxHeight: "620px",
                        borderRadius: "8px",
                      }}
                      src={space}
                      alt={`image-space-${index}`}
                      loading="lazy"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
          <Typography sx={{ fontSize: "18px" }}>
            Nosso espaço foi projetado do zero para que seu filho tenha uma
            experiência lúdica e inesquecível. Todo o ambiente é preparado para
            receber as crianças de maneira divertida e confortável e as salas
            são equipadas com as tecnologias mais atuais do mercado.
          </Typography>
        </Stack>
      </Container>
    </section>
  );
};

export default Space;
