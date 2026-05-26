import React from 'react';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import SystemAlert from './component/shared/SystemAlert';
import Home from './component/sections/Home';
import Industries from './component/sections/Industries';
// import Pentakuhl from './component/sections/Pentakuhl';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './component/layout/Mainlayout';
import PalletShipper from './component/sections/Pentakuhl/PalletShipper';
import ParcelShipper from './component/sections/Pentakuhl/ParcelShipper';
// Layout component jo Navbar aur Footer ko wrap karega
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper ke andar jo routes honge, unme Nav/Footer dikhega */}
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pentakuhl/palletshipper" element={<PalletShipper />} />
          <Route path="/pentakuhl/parcelshipper" element={<ParcelShipper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}