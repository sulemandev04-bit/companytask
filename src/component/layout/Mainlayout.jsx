import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
const Mainlayout = () => {
 return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main Content Area - Iske andar saare pages load honge */}
      <main className="grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Mainlayout
