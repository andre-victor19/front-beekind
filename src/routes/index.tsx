import { RouterProvider } from "react-router-dom";
import { router as InitRoutes } from "./routes";

export function Routes() {
  return <RouterProvider router={InitRoutes} />;
}
