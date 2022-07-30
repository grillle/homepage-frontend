import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./style/Theme";
import './style/Style.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;