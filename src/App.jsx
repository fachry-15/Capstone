import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headercomponents from "./components/navbar";
import MenuHome from "./pages/HomeMenu";
import Menulaporan from "./pages/LaporanMenu";
import MenuEdukasi from "./pages/EdukasiMenu";
import MenuTentang from "./pages/TentangMenu";
import MenuKontak from "./pages/KontakMenu";
import MenuBantuan from "./pages/BantuanMenu";
import LoginMenu from "./pages/LoginMenu";
import MenuRegister from "./pages/RegisterMenu";
function app() {
  return (
    <Router>
      <Headercomponents />
      <main>
        <Routes>
          <Route path="/" element={<MenuHome />} />
          <Route path="/laporan" element={<Menulaporan />} />
          <Route path="/edukasi" element={<MenuEdukasi />} />
          <Route path="/tentang" element={<MenuTentang />} />
          <Route path="/kontak" element={<MenuKontak />} />
          <Route path="/bantuan" element={<MenuBantuan />} />
          <Route path="/login" element={<LoginMenu />} />
          <Route path="/register" element={<MenuRegister />} />
        </Routes>
      </main>
    </Router>

  )
}

export default app;