import { Header } from "./components";
import Countrydetails from "./components/Countrydetails";
import Home from "./components/home";
import CountrycontextProvider from "./context/country-context";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <CountrycontextProvider>
      <div className="bg-background h-full w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryname" element={<Countrydetails />} />
        </Routes>
      </div>
    </CountrycontextProvider>
  );
}

export default App;
