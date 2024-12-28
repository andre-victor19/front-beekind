import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";

const Schedule = () => {
  const [isFixed, setIsFixed] = useState(false); // Estado para fixar o botão

  // Usamos o useInView para observar o elemento
  const { ref, inView } = useInView({
    threshold: 0, // Dispara quando o elemento entra ou sai da viewport
  });

  useEffect(() => {
    // Atualiza o estado com base na visibilidade do botão
    // Quando o botão NÃO está mais visível (inView === false), ativamos o estado fixo
    setIsFixed(!inView);
  }, [inView]);

  return (
    <section test-id="agendar-consulta">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack rowGap={3}>
          <Typography
            sx={{
              fontSize: "32px",
              fontFamily: "DupletRounded-Semibold",
              lineHeight: "normal",
            }}
          >
            Tudo para a saúde do seu filho. De forma{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFB300, #FF5E00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              lúdica e humanizada
            </span>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Somos uma clínica integrativa especialista em pediatria na cidade de
            Campinas-SP. Nossos pacientes são tratados com muito carinho e
            profissionalismo. Cuidamos da saúde do seu filho enquanto ele se
            diverte.
          </Typography>
          {/* Aqui está o elemento que será observado */}
          <div ref={ref}></div>
          {isFixed ? (
            <div
              style={{
                width: "100vw",
                position: "fixed",
                top: 0,
                left: "50%", // Centraliza horizontalmente
                transform: "translateX(-50%)", // Ajuste para centralizar
                zIndex: 10,
                backgroundColor: "#eceae6",
                padding: "16px",
                boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Container maxWidth="xs">
                <Button color="primary" variant="contained" fullWidth>
                  Agendar consulta
                </Button>
              </Container>
            </div>
          ) : (
            <Container maxWidth="xs">
              <Button color="primary" variant="contained" fullWidth>
                Agendar consulta
              </Button>
            </Container>
          )}
        </Stack>
      </Container>
    </section>
  );
};

export default Schedule;
