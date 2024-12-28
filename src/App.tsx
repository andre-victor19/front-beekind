import { AppProvider } from "./contexts";
import { Routes } from "./routes";

const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
