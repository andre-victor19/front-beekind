import React, { Suspense } from "react";
import Stack from "@mui/material/Stack";

const Schedule = React.lazy(() => import("./sections/Schedule"));
const Specialties = React.lazy(() => import("./sections/Specialties"));
const Professionals = React.lazy(() => import("./sections/Professionals"));
const Differences = React.lazy(() => import("./sections/Differences"));
const Space = React.lazy(() => import("./sections/Space"));
const Feedbacks = React.lazy(() => import("./sections/Feedbacks"));
const Google = React.lazy(() => import("./sections/Google"));

const Home = () => {
  return (
    <Stack rowGap={3}>
      <Suspense fallback={<div>Carregando...</div>}>
        <Schedule />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Space />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Specialties />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Professionals />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Differences />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Google />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <Feedbacks />
      </Suspense>
    </Stack>
  );
};

export default Home;
