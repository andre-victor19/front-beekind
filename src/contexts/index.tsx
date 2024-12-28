import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { configureDesignSystem } from "../theme/designTheme";
import { PortalProvider } from "./Portal";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={configureDesignSystem}>
        <PortalProvider>{children}</PortalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
