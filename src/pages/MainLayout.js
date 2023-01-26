import React from "react";
import Headers from "../Components/layout/Headers";
import Navbars from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";

export default function MainLayout() {
  return (
    <div>
      <Headers />
      <Navbars />
      <Footer />
    </div>
  );
}
