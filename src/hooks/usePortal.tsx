import { useContext } from "react";

import { PortalContext, PortalContextData } from "../contexts/Portal";

export function usePortal(): PortalContextData {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error("usePortal must be used within an PortalProvider");
  }

  return context;
}
