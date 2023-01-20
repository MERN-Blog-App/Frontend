import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./components/Shared/Navbar";
import Sidebar from "./components/Shared/Sidebar";

import Blogs from "./components/Blog/Blogs";
import CreateBlog from "./components/CreateBlog/CreateBlog";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <div className="app">
          <Sidebar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Blogs />} />
                <Route path="/create-blogs" element={<CreateBlog />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
