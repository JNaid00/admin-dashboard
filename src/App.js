import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invocies from "./scenes/invoices"
// import Sidebar from "./scenes/"
// import Sidebar from "./scenes/"
// import Sidebar from "./scenes/"
// import Sidebar from "./scenes/"
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
			  <Route path="/team" element={<Team />} />
			  <Route path="/contacts" element={<Contacts />} />
			  <Route path="/invoices" element={<Invocies />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
