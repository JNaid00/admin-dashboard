import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invocies from "./scenes/invoices"
import Form from "./scenes/form"
import Calender from "./scenes/calendar"
import FAQ from "./scenes/faq"
import BAR from "./scenes/bar"

import { Toaster } from 'react-hot-toast';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
			<Toaster/>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
			  <Route path="/team" element={<Team />} />
			  <Route path="/contacts" element={<Contacts />} />
			  <Route path="/invoices" element={<Invocies />} />
			  <Route path="/form" element={<Form />} />
			  <Route path="/calendar" element={<Calender />} />
			  <Route path="/faq" element={<FAQ />} />
			  <Route path="/bar" element={<BAR />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
