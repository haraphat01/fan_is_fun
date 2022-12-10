import React from "react";
import Navbar from "../components/navbar";

export default function MainLayout({ children }) {
  return (
    <main id={"main"}>
      {/* top nav */}
      <Navbar />

      {/* main-content */}
      {children}

      {/* footer */}
      <footer className="container bottom-0 py-4 border-top mt-4">
        <div className="row">
          <div className="col-12 col-md-6 fw-bold">FanIsFun Limited</div>
          <div className="col-12 col-md-6 text-end">
            All right reserved, &#169; Copyright 2022
          </div>
        </div>
      </footer>
    </main>
  );
}
