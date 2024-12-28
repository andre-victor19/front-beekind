import React, { Suspense } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Stack test-id="content-layout" height="100vh">
        <Suspense fallback={<div>Carregando...</div>}>
          <Header />
        </Suspense>
        <Stack direction={"row"} flex={1} justifyContent="center">
          <Suspense fallback={<div>Carregando...</div>}>
            <Sidebar test-id="grid-page-sidebar" />
          </Suspense>

          <Stack test-id="grid-page-content" direction="row" flex={1}>
            <Fade
              test-id="fade-page-content"
              in
              timeout={{ exit: 0, enter: 1 * 500 }}
              appear
              unmountOnExit
            >
              <Stack test-id="page-content" flex={1}>
                {children}
              </Stack>
            </Fade>
          </Stack>
        </Stack>
        <Suspense fallback={<div>Carregando...</div>}>
          <Footer />
        </Suspense>
      </Stack>
    </>
  );
};

export default Layout;
