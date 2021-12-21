import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
  return (
    <div className="divPublic">
      <Navbar />
      <main className="mainPublic">
          <Outlet/>
        <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
